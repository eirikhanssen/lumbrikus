$( document ).ready(function() {
    console.log( "lumbrikus.js ready!" );

    lightbox.option({
        'wrapAround': true,
        'albumLabel': 'Bilde %1 av %2',
        'fadeDuration': 200,
        'imageFadeDuration' : 200,
        'resizeDuration': 200,
        'disableScrolling' : false,
        'fitImagesInViewport' : true,
        'alwaysShowNavOnTouchDevices' : true,
        'positionFromTop': 10
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

      /* turn links to attachment pages into lightbox-links to display images in fullscreen */

      var turn_attachment_page_links_to_lightbox_showimage_links = (function(){
        var attachments = $('.wp-caption');
        attachments.each(function(){
            var url_attachmentpage="";
            var attachment_page_link_html = "";
            var has_attachment_page_url = false;
            if($(this).find('a').length) {
                console.log('yes');
                url_attachmentpage=$(this).find('a').attr("href");
                attachment_page_link_html = "<p class='additional-info'>Se <a href='" + url_attachmentpage + "'>vedleggssiden</a> for mer info om bildet.</p>";
                has_attachment_page_url = true;
            } else {
                console.log('no');
                $(this).addClass('no_attachment_link');
            }
            
            var url_smallimage=$(this).find('img').attr('src');
            var url_largeimage=url_smallimage.replace(/^(.+?)-\d+x\d+([.](jpg|jpeg|png|svg))$/,'$1$2');
            var lbox_caption = "<p class='caption-text'>" + $(this).find('.wp-caption-text').html() + '</p>' + attachment_page_link_html;
            var caption_html_contents = $(this).html();
            var lightbox_link_element_html = '<a href="'+ url_largeimage +'" data-lightbox="showimages" data-title="' + lbox_caption + '"></a>';
            
            if (has_attachment_page_url) {
                $(this).find('a').attr('href', url_largeimage);
                $(this).find('a').attr('data-lightbox', 'showimages');
                $(this).find('a').attr('data-title', lbox_caption);
            } else {
                $(this).html(lightbox_link_element_html);
                $(this).find('a').html(caption_html_contents);
            }
        });
      })();
});