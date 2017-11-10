#!/usr/bin/python3
import sys
import re
f=open(sys.argv[1], 'r')
filename = sys.argv[1]
cuecounter = 0
current_line = ""
closepara = False
output =""
last_timecode=""
r_timecode = re.compile("(\d+:\d+[.]\d+) --> (\d+:\d+[.]\d+)")
r_track_lang_and_num = re.compile("^.*?([a-zA-Z][a-zA-Z])_(\d+[lkLK]).*$")
r_webvtt = re.compile("WEBVTT")

def get_tracknum(txt):
    if r_track_lang_and_num.match(txt):
        return r_track_lang_and_num.match(txt).group(2).upper()
    else:
        return "__TRACKNUM__"

def get_LANGCODE(txt):
    if r_track_lang_and_num.match(txt):
        return r_track_lang_and_num.match(txt).group(1).upper()
    else:
        return "__LANGCODE__"

def get_srclang(txt):
    if r_track_lang_and_num.match(txt):
        return r_track_lang_and_num.match(txt).group(1).lower()
    else:
        return "__SRCLANG__"

def get_track_label(txt):
    srclang = ""
    label = "(captions)"
    if r_track_lang_and_num.match(txt):
        srclang = get_srclang(txt)
        if srclang == 'no':
            label = "Norsk " + label
        elif srclang == 'ar':
            label = "Arabisk " + label
        elif srclang == "so":
            label = "Somali " + label
        elif srclang == "ti":
            label = "Tigrinja " + label
        else:
            label = "__LANG____LABEL__"
    else:
        label = "__LANG_LABEL__"
    return label

def get_dir_attr(txt):
    srclang = ""
    if r_track_lang_and_num.match(txt):
        srclang = get_srclang(txt)
    if srclang == 'ar':
        return " dir=\"rtl\""
    else:
        return ""

def begin_html_fragment():
    global output
    output += "<article class=\"audio_and_text " + get_srclang(filename) + "\" data-lang=\"" + get_srclang(filename) + "\" lang=\"" + get_srclang(filename) + "\"" + get_dir_attr(filename)  + ">\n\n"
    output += "<audio id=\"audio-" + get_srclang(filename) + "\" class=\"mejs__player\">\n"
    output += "    <source src=\"/media/audio/mp3_64k/" + get_LANGCODE(filename) + "_" + get_tracknum(filename) + ".mp3\" type=\"audio/mp3\"/>\n"
    output += "    <source src=\"/media/audio/ogg_64k/" + get_LANGCODE(filename) + "_" + get_tracknum(filename) + ".ogg\" type=\"audio/ogg\"/>\n"
    output += "    <source src=\"/media/audio/aac_m4a_64k/" + get_LANGCODE(filename) + "_" + get_tracknum(filename) + ".m4a\" type=\"audio/mp4\"/>\n"
    output += "    <track kind=\"captions\" src=\"/media/vtt/" + get_LANGCODE(filename) + "_" + get_tracknum(filename) + ".vtt\" srclang=\"" + get_srclang(filename) + "\" label=\"" + get_track_label(filename) + "\" default=\"default\"/>\n"
    output += "    <track kind=\"subtitles\" src=\"/media/vtt/AR_" + get_tracknum(filename) + ".vtt\" srclang=\"ar\" label=\"Arabisk (synk)\"/>\n"
    output += "    <track kind=\"subtitles\" src=\"/media/vtt/NO_" + get_tracknum(filename) + ".vtt\" srclang=\"no\" label=\"Norsk (synk)\"/>\n"
    output += "    <track kind=\"subtitles\" src=\"/media/vtt/SO_" + get_tracknum(filename) + ".vtt\" srclang=\"so\" label=\"Somali (synk)\"/>\n"
    output += "    <track kind=\"subtitles\" src=\"/media/vtt/TI_" + get_tracknum(filename) + ".vtt\" srclang=\"ti\" label=\"Tigrinja (synk)\"/>\n"
    output += "</audio>\n\n"
    output += "<div class=\"cues\">"

def close_html_fragment():
    global output
    output += "  </div><!-- last cue -->\n"
    output += "\n</div><!-- .cues -->\n\n"
    output += "</article><!-- .audio_and_text." + get_srclang(filename) + " -->\n"

def handle_line(txt):
    print("placeholder")

def store_last_timecode(txt):
    global cuecounter
    global last_timecode
    cuecounter += 1
    last_timecode = txt

def is_vtt(txt):
    if cuecounter == 0 and r_webvtt.match(txt):
        return True
    else:
        return False

def is_timecode(txt):
    if r_timecode.match(txt):
        return True
    else:
        return False

def is_blank(txt):
    r_blankline = re.compile("^\s*$")
    if r_blankline.match(txt):
        return True
    else:
        return False

def begin_vtt():
    global output
    output = output + "WEBVTT\n\n"

def begin_cue_n(txt):
    global output
    # close the previous cue
    output += "</div>\n"
    # begin the new cue
    begin_cue(txt)

def get_begin_time(timecode):
    global r_timecode
    begin_time = r_timecode.match(timecode).group(1)
    return begin_time

def get_end_time(timecode):
    global r_timecode
    end_time = r_timecode.match(timecode).group(2)
    return end_time

def begin_cue(txt):
    global cuecounter
    id = str(cuecounter)
    global last_timecode
    global output
    close_cue_string=""
    if cuecounter > 1:
        close_cue_string = "  </div>"
    #output += close_cue_string + "\n\n" + id + "\n" + last_timecode.rstrip() + "\n" + '<div class="key" data-key="' + id +  '"' + ">\n"
    output += close_cue_string + "\n\n" + '  <div class="key" data-key="' + id +  '"' + ">\n"

def process_line_of_text(txt):
    global last_timecode
    global output
    output += '    <p>' + txt.rstrip() + '</p>' + "\n"

for line in f:
    if (is_vtt(line)):
        begin_html_fragment()
    elif is_blank(line):
        pass
    elif is_timecode(line):
        store_last_timecode(line)
        begin_cue(line)
    else:
        process_line_of_text(line)

f.close()

close_html_fragment()

print(output)
