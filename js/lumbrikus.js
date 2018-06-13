$( document ).ready(function() {
    console.log( "lumbrikus.js ready!" );

    lightbox.option({
        'wrapAround': true,
        'albumLabel': '%1 / %2',
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
            var el_anchor_around_image;
            var el_anchor_to_attachment_page;
            var url_to_attachmentpage="";
            var image_small_el = this.querySelector('img');
            var image_small_src = image_small_el.getAttribute('src');
            var image_large_src = image_small_src.replace(/^(.+?)-\d+x\d+([.](jpg|jpeg|png|svg))$/,'$1$2');
            var p_wp_caption_text_el = this.querySelector('.wp-caption-text');
            var attachment_page_link_text = document.createTextNode("Se mer informasjon om bildet");
            var span_opphav_el = this.querySelector('.opphav');
            var p_metadata_el = document.createElement('p');
            p_metadata_el.setAttribute('class','metadata');
            var lightbox_caption_el = document.createElement('div');
            lightbox_caption_el.setAttribute('class','lightbox-caption');
            $(p_wp_caption_text_el).clone().appendTo(lightbox_caption_el);
            $(lightbox_caption_el.querySelector('.opphav')).appendTo(p_metadata_el);

            if (this.querySelector('a')) {
                //console.log('has anchor');
                el_anchor_around_image = this.querySelector('a');
                url_to_attachmentpage = el_anchor_around_image.getAttribute('href');
                el_anchor_to_attachment_page = document.createElement('a');
                el_anchor_to_attachment_page.setAttribute('href',url_to_attachmentpage);
                el_anchor_to_attachment_page.appendChild(attachment_page_link_text);
                el_anchor_to_attachment_page.setAttribute('title','På vedleggssiden til bildet kan du finne mer informasjon om bildet/opphavet');
                var space = document.createTextNode(" ");
                p_metadata_el.appendChild(space);
                p_metadata_el.appendChild(el_anchor_to_attachment_page);

            } else {
                //console.log('does not have anchor');
                $(this).addClass('no-link-to-attachment-page');
                el_anchor_around_image = document.createElement('a');
                el_anchor_around_image.appendChild(image_small_el);
            }
            lightbox_caption_el.appendChild(p_metadata_el);
            var lightbox_caption_htmlstring = lightbox_caption_el.outerHTML.replace(/"/g,"'");

            el_anchor_around_image.setAttribute('href',image_large_src);
            el_anchor_around_image.setAttribute('data-lightbox','showimages');
            el_anchor_around_image.setAttribute('data-title',lightbox_caption_htmlstring);

            this.appendChild(el_anchor_around_image);
            this.appendChild(p_wp_caption_text_el);

            //console.log(this);
            //console.log(lightbox_caption_htmlstring);
        });
      })();
});