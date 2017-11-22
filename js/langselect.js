$( document ).ready(function() {
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

		$('.togglebutton').on("click", function(e){
			$(e.target).toggleClass("on");
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

		$('.fakebutton').on('keydown', function(e){
			if(e.keyCode === 13 || e.keyCode === 32) {
				e.target.click();
			}
		});
	}
});