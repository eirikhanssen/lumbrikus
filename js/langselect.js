$( document ).ready(function() {
	if($('#lang_select_form')) {

		var primary_language = $('input[name=primary_language]:checked').attr('id');
		var secondary_language = $('input[name=secondary_language]:checked').attr('id');
		$('body').attr('data-secondary-lang', secondary_language.replace(/.+?_([^_]+)$/g,'$1'));
		$('body').attr('data-primary-lang', primary_language.replace(/.+?_([^_]+)$/g,'$1'));
		$('body').addClass(primary_language);
		$('body').addClass(secondary_language);
		$('#lang_select_form').change(function(e){
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
				$('body').removeClass('secondary_lang_none');
				$('body').attr('data-secondary-lang', newLang);
			}
			
			$('body').addClass(input_id);
		});

		$('.langMirrorBtn').on("click", function(){
			$('#' + $(this).attr('data-input')).click();
			//console.log($(this));
		});
	}
});