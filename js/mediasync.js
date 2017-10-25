function time2sec(timestring) {
    // convert timestring to seconds
    'use strict';
    var timereg = new RegExp(/(\d\d):(\d\d):([0-9.]+)/);
    if (!timestring.match(timereg)) {
        return 0;
    }
    var sec_in_hours = Number(timestring.replace(timereg, '$1')) * 3600;
    var sec_in_minutes = Number(timestring.replace(timereg, '$2')) * 60;
    var sec_in_seconds = Number(timestring.replace(timereg, '$3'));
    var sec_total = sec_in_hours + sec_in_minutes + sec_in_seconds;
    return sec_total;
}

function updateCueSync(player, lang) {
    'use strict';
    if (lang === 'no') {
        var mptime = player.getCurrentTime();
        var cues = $('.cues span[data-begin]');
        cues.each(function () {
            var cue_begin = time2sec($(this).attr('data-begin'));
            var cue_end = time2sec($(this).attr('data-end'));
            if ($(this).hasClass('active-cue')) {
                if (mptime < cue_begin || mptime > cue_end){
                    $(this).removeClass('active-cue');
                }
            } else {
                if (mptime >= cue_begin && mptime <= cue_end) {
                    $(this).addClass('active-cue');
                }
            }
        });
    }
}

function scrollTo(el) {
    //el.parent().scrollTop(el.offset().top - 30);
    var scroll_duration = 700;
    var childPos = el.offset()
    var parentPos = el.parent().offset()
    var childOffsetTop = childPos.top - parentPos.top

    $('html, body').animate({
        scrollTop: childOffsetTop
        }, scroll_duration);
}

var getCurrentEntryIndexFromTracks = function(player) {
    // the track with the same language as the audio will be of kind = captions
    // the tracks with other languages than the audio will be of kind = subtitles
    var tracksObj = player.tracks;
    var currentTime = player.getCurrentTime();
    var i;
    for(i=0; i<tracksObj.length; i++) {
        var currentTrack = tracksObj[i];
        if (currentTrack.kind == "captions") {
            var j;
            for(j=0; j<currentTrack.entries.length; j++) {
                var currentEntry = currentTrack.entries[j];
                if ((currentTime >= currentEntry.start || (j>0 && currentTime > currentTrack.entries[j-1].stop)) && currentTime <= currentEntry.stop) {
                    return j;
                }
            }
        }
    }
    return 0;
}

var getCurrentSubtitleFromTracks = function (player, kind, srclang, entryIndex) {
    // tracksObj has several tracks
    // find the track that is the right kind, has the right srclang
    // return that track's entry's text matching the entryIndex
    var tracksObj = player.tracks;
    var i;
    for(i=0; i<tracksObj.length; i++) {
        var currentTrack = tracksObj[i];
        if (currentTrack.kind == kind && currentTrack.srclang == srclang && player.getCurrentTime() > 0) {
            //return entryIndex + ' : ' + currentTrack.entries[entryIndex].text;
            //console.log(entryIndex, srclang, kind, player);
            return currentTrack.entries[entryIndex].text;
        }
    }
    return;
}

var getTranslatedSubtitle = function(player, lang) {
    //return player.getCurrentTime() + ' : ' + getCurrentSubtitleFromTracks(player, 'subtitles', lang, getCurrentEntryIndexFromTracks(player));
    return getCurrentSubtitleFromTracks(player, 'subtitles', lang, getCurrentEntryIndexFromTracks(player));
}

function getCurrentCueId(player, lang) {
     var tracks = player.tracks;

     var currentTime = player.getCurrentTime();
     var i;
     for (i = 0; i < tracks.length; i++) {
         var currentTrack = tracks[i];
        if (currentTrack.kind == "captions" && currentTrack.srclang == lang) {
            var j;
            for(j=0; j<currentTrack.entries.length; j++) {
                var currentEntry = currentTrack.entries[j];
                if (currentTime >= currentEntry.start && currentTime <= currentEntry.stop) {
                    return currentEntry.identifier;
                }
            }
        }
     }
}

$( document ).ready(function() {
    $('article.audio_and_text').each(function(){

        var lang = ($(this).attr('data-lang'));
        var playerId = $('#audio-' + lang).closest('.mejs__container').attr('id');
        var player = mejs.players[playerId];
        var mediaEl = $(this).find('audio')[0];
        var that = this;

        function updateTextSync(){
            //console.log('updateTextSync');
            currentPlayerKeys = $('article[data-lang='+lang+ '] .key');
            currentPlayerKeys.each(function(){
                var currentCueId = getCurrentCueId(player,lang) || 1;
                if ($(this).attr('data-key') != currentCueId) {
                    if ($(this).hasClass('playing')) {
                        $(this).removeClass('playing');
                    }
                } else {
                    if (!$(this).hasClass('playing')) {
                        $(this).addClass('playing');
                        scrollTo($(this));
                    }
                }
            });
            var secondary_language = $('body').attr('data-secondary-lang');
            //var translatedCueText = getTranslatedSubtitle(player, secondary_language);
            var translatedCueText = getTranslatedSubtitle(player, secondary_language);
            if ($('#translation').html() != translatedCueText) {
                $('#translation').html(translatedCueText);
            } if ($('body').attr('secondary_language') == 'none') {
                $('#translation').html('');
            }

        }
        $(mediaEl).on("playing", function(){
            //console.log("playing: " + lang);
            updateTextSync();
            updateCueSync(player, lang);
        });
        $(mediaEl).on("pause", function(){
            //console.log("paused: " + lang);
        });
        $(mediaEl).on("seeking", function(){
            //console.log("seeking: " + lang);
        });
        $(mediaEl).on("seeked", function(){
            //console.log("seeked: " + lang);
        });
        $(mediaEl).on("ended", function(){
            //console.log("ended: " + lang);
        });
        $(mediaEl).on("volumechange", function(){
            //console.log("volume of " + lang + ": " + player.getVolume());
        });
        $(mediaEl).on("timeupdate", function(){
            //console.log("timeupdate of " + lang + ": " + player.getCurrentTime());
            updateTextSync();
            updateCueSync(player, lang);
            // finn ut hvilken cue som er aktiv
            // oppdater hvilken cue i andre språk som skal være aktiv/playing
            // f.eks .sync-no .sync-so .sync-ar .sync-ti
        });
    });
});