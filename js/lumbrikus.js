$( document ).ready(function() {
    console.log( "lumbrikus.js ready!" );

    lightbox.option({
        'wrapAround': true,
        'albumLabel': 'Bilde %1 av %2',
        'fadeDuration': 400,
        'fadeImageDuration': 10,
        'resizeDuration': 100
      });

      // create page toc if #page-toc element exists

      if($('#page-toc')) {
        var headings_on_page = [];
        var toclist = document.createElement("ul");

              function createPageToc() {
                var hcount = 0;
                $('h1,h2,h3,h4,h5,h6').each(function(){
                    if($(this).is(":visible")) {
                        var lvl = this.nodeName.replace(/[^0-9]+(\d+)/, '$1');
                        var newid = "toc-"
                        
                        if(!$(this).attr("id")){
                            hcount ++;
                            newid += hcount;
                            $(this).attr("id", newid);
                        } else {
                            newid = $(this).attr("id");
                        }
            
                        var link = {
                            lvl: lvl,
                            id: newid,
                            text: $(this).text()
                        }
                        var li = document.createElement('li');
                        li.innerHTML = '<a href="#' + link.id  + '">' + link.text + '</a>';
                        $(li).attr("lvl", link.lvl);
                        $(li).appendTo(toclist);
                    }
                });
        
                $(toclist).appendTo( $( '#page-toc') );
              }
        
              createPageToc();
      } else {
          //console.log("no #page-toc");
      }

});