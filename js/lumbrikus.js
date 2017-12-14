$( document ).ready(function() {
    console.log( "lumbrikus.js ready!" );

    lightbox.option({
        'wrapAround': true,
        'albumLabel': 'Bilde %1 av %2',
        'fadeDuration': 400,
        'fadeImageDuration': 10,
        'resizeDuration': 100
      });

      function giveHeadingsTocId() {
          console.log("giveHeadingsTocId()");
        var hcount = 0;

        $('h1,h2,h3,h4,h5,h6').each(function(){
            hcount ++;
            $(this).attr("id","toc-" + hcount);
        });
      }

      giveHeadingsTocId();
});