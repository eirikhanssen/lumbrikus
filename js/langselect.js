$( document ).ready(function() {

	function isScrolledIntoView(elem) {
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
	
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
	
		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	if($('#lang_select_form')) {

		var primary_language = $('input[name=primary_language]:checked').attr('id');
		var secondary_language = $('input[name=secondary_language]:checked').attr('id');
		$('body').attr('data-secondary-lang', secondary_language.replace(/.+?_([^_]+)$/g,'$1'));
		$('body').attr('data-primary-lang', primary_language.replace(/.+?_([^_]+)$/g,'$1'));
		$('body').addClass(primary_language);
		$('body').addClass(secondary_language);
		$('fieldset').change(function(e){
			var target = e.target;
			var name = $(target).attr('name');
			var input_id = $(target).attr('id');
			var newLang = input_id.replace(/.+?_([^_]+)$/g,'$1');
			if(name == 'primary_language') {
				$('body').removeClass('primary_lang_ar');
				$('body').removeClass('primary_lang_no');
				$('body').removeClass('primary_lang_so');
				$('body').removeClass('primary_lang_ti');
				$('body').attr('data-primary-lang', newLang);
			} else if (name == 'secondary_language') {
				$('body').removeClass('secondary_lang_ar');
				$('body').removeClass('secondary_lang_no');
				$('body').removeClass('secondary_lang_so');
				$('body').removeClass('secondary_lang_ti');
				$('body').removeClass('secondary_lang_img');
				$('body').attr('data-secondary-lang', newLang);
			}
			
			$('body').addClass(input_id);
		});

		$('#btn-maxmin').on("click", function(){
			$('body').toggleClass('fullscreen');
		});

		$('#btn-image-toggle').on("click", function(){
			$('body').toggleClass('showimage');
		});

		$('#btn-primary-language-showimage-maxmin').on("click", function(){
			$('body').toggleClass('showimage-max');
		});

		$('#btn-primary-language-showimage-close').on("click", function(){
			$('#btn-image-toggle').click();
		});

		$('.togglebutton, .showimage-maxmin').on("click", function(e){
			// toggle button state aria-pressed: true|false
			var pressed_state = $(e.target).attr("aria-pressed");
			var new_state = null;

			switch(pressed_state) {
				case "false":
					new_state = "true";
				break;
				case "true":
					new_state = "false";
				break;
				default:
					console.log("unknown state on: ", e.target);
				break;
			}

			$(e.target).attr("aria-pressed", new_state);
		});

		$('.labelradiobtn').on('keydown', function(e){
			if(e.keyCode === 13 || e.keyCode === 32) {
				e.target.click();
			}
		});

		document.addEventListener('scroll', function (event) {
			var body = document.querySelector('body');
			var translation = document.querySelector('#translation');
			if (!$('body').hasClass('fullscreen')) {
				if (isScrolledIntoView($('#secondary_language'))) { // or any other filtering condition        
					console.log('scrollTop: ' + body.scrollTop , event.target);
					translation.setAttribute("style", "transform: translate(0,-" + body.scrollTop + "px);");
				} else {
					translation.setAttribute("style", "top: 0px; margin-top: 0;");
				}
			}
			 
			
			
		}, true /*Capture event*/);
	}
});