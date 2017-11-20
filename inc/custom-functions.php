<?php 
/**
 * return array with attachment meta
 *
 * @param [type] $attachment_id
 * @return void
 */
function lumbrikus_get_attachment_meta( $attachment_id ) {

$attachment = get_post( $attachment_id );
return array(
    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
    'caption' => $attachment->post_excerpt,
    'description' => $attachment->post_content,
    'href' => get_permalink( $attachment->ID ),
    'src' => $attachment->guid,
    'title' => $attachment->post_title
	);
}


function lumbrikus_has_children($post_id) {
    $children = get_pages( array( 'child_of' => $post_id ) );
    if( count( $children ) == 0 ) {
        return false;
    } else {
        return true;
    }
}

/**
 * find all pages that has page with $post_id as parent, and return a nav with links to them. If they have a fetured image, use that in the link.
 */
function lumbrikus_make_text_links_to_children($post_id) {
/*
	Interesting/useful properties of a page:
	$children[n]->post_title
	$children[n]->post_name
	$children[n]->ID
	$children[n]->post_excerpt
	$children[n]->post_parent
	$children[n]->menu_order
	$img = get_the_post_thumbnail($children[n])
*/
// call like this:
// echo lumbrikus_make_text_links_to_children(get_the_ID()); 

	$output = "\n<!-- BEGIN NAV TO CHILD PAGES -->\n";

	if(lumbrikus_has_children($post_id)) {
		$output .="<nav class=\"child-page-links text\">\n<ul>\n";
		$all_children = get_pages( array( 'child_of' => $post_id ) );
		$wanted_children = [];
		
		/* get all direct child pages */

		foreach($all_children as $possible_child) {
			if($possible_child->post_parent == $post_id) {
				array_push($wanted_children, $possible_child);
			}
		}		

		function compare_childpages($a, $b) {
			return (int)$a->menu_order - (int)$b->menu_order;
		}

		usort($wanted_children, compare_childpages);

		/* sort them depending on menu_order*/

		foreach ($wanted_children as $childpage) {
		
			$link_text=$childpage->post_title;
			$link_href=$childpage->post_name;

			$li = "<li>";         
			$li .= "<a href=\"" . $link_href . "\">";
			$li .= $link_text;
			$li .= "</a>";        
			$li .= "</li>";
			$output .= $li;
		
		}
		/* $children loop end */

		
		$output .= "</ul>\n</nav>\n";
	} else {
		$output = "\n<!-- lumbrikus_make_text_links_to_children(): Denne siden har ingen barn. -->\n";
	}

	$output .= "\n<!-- END NAV TO CHILD PAGES -->\n";
	
	return $output;
}


/**
 * find all pages that has page with $post_id as parent, and return a nav with links to them. If they have a fetured image, use that in the link.
 */
function lumbrikus_make_textimage_links_to_children($post_id) {
/*
	$children[n]->post_title
	$children[n]->post_name
	$children[n]->ID
	$children[n]->post_excerpt
	$children[n]->post_parent
	$children[n]->menu_order
	$img = get_the_post_thumbnail($children[n])
*/
	$output = "\n<!-- BEGIN NAV TO CHILD PAGES -->\n";

	if(lumbrikus_has_children($post_id)) {
		$output .="<nav class=\"child-page-links textimage\">\n<ul>\n";
		$all_children = get_pages( array( 'child_of' => $post_id ) );
		$wanted_children = [];
		
		/* get all direct child pages */

		foreach($all_children as $possible_child) {
			if($possible_child->post_parent == $post_id) {
				array_push($wanted_children, $possible_child);
			}
		}		

		function compare_childpages($a, $b) {
			return (int)$a->menu_order - (int)$b->menu_order;
		}

		usort($wanted_children, compare_childpages);

		/* sort them depending on menu_order*/

		foreach ($wanted_children as $childpage) {
		
			$link_text=$childpage->post_title;
			$link_href=$childpage->post_name;

			$li = "<li>";         
			$li .= "<a href=\"" . $link_href . "\">";
			$li .= "<figure class=\"link-display\">";
			if ( has_post_thumbnail($childpage) ) {
    				$li .= "<div class=\"imagewrapper\">" . get_the_post_thumbnail($childpage, 'link-thumb') . "</div>";
				} else {
					$li .= "<p>[Siden denne lenken leder til mangler 'fremhevet bilde']</p>";
				}
			$li .= "<figcaption>" . $link_text . "</figcaption>";
			$li .= "</figure>";
			$li .= "</a>";        
			$li .= "</li>";
			$output .= $li;
		
		}
		/* $children loop end */

		
		$output .= "</ul>\n</nav>\n";
	} else {
		$output = "\n<!-- lumbrikus_make_text_links_to_children(): Denne siden har ingen barn. -->\n";
	}

	$output .= "\n<!-- END NAV TO CHILD PAGES -->\n";
	
	return $output;
}


function lumbrikus_make_image_links_to_children($post_id) {}

function lumbrikus_path_rel_up($lvl) {
	$up ="";
	if($lvl < 1) {
		$up = "./";
		
	} else {
		for($i=1; $i <= $lvl; $i++) {
			$up .= "../";
		}
	}
	return $up;
}

function lumbrikus_generate_link_LI($chapter, $lvl, $link){
	$href = lumbrikus_path_rel_up($lvl) . $link[0];
	$linktext = $link[1];
	$xlinkns = 'xmlns:xlink="http://www.w3.org/1999/xlink" ';
	$icon_fragment = "#icon-";
	$li_class = "";
	$icon_markup = '<svg class="icon"><use xlink:href="/media/svg/lumbrikus-symbol-icons.svg';

	switch ($link[0]) {
		case '':
			$icon_fragment .= $chapter;
			$li_class = "hovedside";
		break;
		case 'kort':
			$icon_fragment .= 'kort-fortelling'; 
			$li_class = "kort";
		break;
		case 'lang':
			$icon_fragment .= 'lang-fortelling'; 
			$li_class = "lang";
		break;
		case 'let-og-finn':
			$icon_fragment .= 'let-og-finn'; 
			$li_class = "let-og-finn";
		break;
		case 'ord':
			$icon_fragment .= 'ord';
			$li_class = "ord"; 
		break;
		case 'gjore-og-lage':
			$icon_fragment .= 'gjore-lage'; 
			$li_class = "gjore-og-lage";
		break;
		case 'filmer':
			$icon_fragment .= 'filmer';
			$li_class = "filmer"; 
		break;
		case 'snutter':
			$icon_fragment .= 'snutter';
			$li_class = "snutter"; 
		break;
		case 'kviss':
			$icon_fragment .= 'kviss'; 
			$li_class = "kviss";
		break;
		case '../':
			$icon_fragment .= 'kapitler';
			$li_class = "kapitler";
		break;
		default:
			$icon_fragment .= 'lumbrikus';
		break;

	}

	if($li_class != "") {
		$li_class = ' class="' . $li_class . '"';
	}

	$icon_markup .= $icon_fragment . '"></use></svg>';

	$output_LI = "    <li" . $li_class . "><a href=\"" . $href . "\">" . $icon_markup . "<span class=\"linktext\">" . $linktext . "</span></a></li>\n";
	return $output_LI;
}

function lumbrikus_nav_internal_chapter_links($chapter, $lvl){
	$LIs = "";
	$links_raw = [
	['../','kapitler'],
	['','bilde'],
	['kort', 'kort fortelling'],
	['lang', 'lang fortelling'],
	['let-og-finn', 'let og finn'],
	['ord', 'ord'],
	['gjore-og-lage', 'gjøre og lage'],
	['filmer', 'filmer'],
	['snutter', 'snutter'],
	['kviss', 'kviss']];

	foreach($links_raw as $link) {
		$LIs .= lumbrikus_generate_link_LI($chapter, $lvl, $link);
	}	

	$nav_internal_chapter_links = "\n<nav class=\"internal-chapter-links\">\n<h2 class=\"aural-only\">Naviger dette kapitlet</h2>  <ul>\n" . $LIs . "  </ul>\n</nav><!-- .internal_chapter_links -->\n";

	return $nav_internal_chapter_links;
}

function lumbrikus_get_chapter_num() {
	$current_url=$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$string = $current_url;
	$pattern = '/^.+?\/kap-([0-9][0-9]).+$/i';
	$replacement = '$1';
	$chapter_num = intval(preg_replace($pattern, $replacement, $string));
	return $chapter_num;
}

function lumbrikus_internal_chapter_menu($lvl) {
	$chapter_num = lumbrikus_get_chapter_num();

	return lumbrikus_nav_internal_chapter_links($chapter_num, $lvl);
}

function lumbrikus_audiosync_markup_begin() {
	$output =<<<HTML
<section id="lang_select">
	<fieldset class="langselect" id="primary_language">
		<legend>språk</legend>
		<label class="single" for="primary_lang_no">
			<input id="primary_lang_no" type="radio" name="primary_language" checked="checked"/>
			<span class="radiofakebutton no" tabindex="0">
				<span lang="no">Norsk</span>
				<span lang="en">Norwegian</span>
			</span>
		</label>
		<label for="primary_lang_ar">
			<input id="primary_lang_ar" type="radio" name="primary_language"/>
			<span class="radiofakebutton ar" tabindex="0">
				<span lang="ar" class="rtl">العربية</span>
				<span lang="no">Arabisk</span>
			</span>
		</label>
		<label for="primary_lang_so">
			<input id="primary_lang_so" type="radio" name="primary_language"/>	
			<span class="radiofakebutton so" tabindex="0">
				<span lang="so">SOOMAALI</span>
				<span lang="no">Somali</span>
			</span>
		</label>
		<label for="primary_lang_ti">
			<input id="primary_lang_ti" type="radio" name="primary_language"/>
			<span class="radiofakebutton ti" tabindex="0">
				<span lang="ti">ትግርኛ</span>
				<span lang="no">Tigrinja</span>
			</span>
		</label>
		<button class="togglebutton image-toggle" id="btn-image-toggle">
			<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-image"></use></svg>
		</button>
		<button class="togglebutton maxmin" id="btn-maxmin">
			<svg class="icon maximize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-maximize"></use></svg>
			<svg class="icon minimize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-minimize"></use></svg>
		</button>
	</fieldset>
	<fieldset class="langselect" id="secondary_language">
		<legend>støttespråk</legend>
		<label class="single" for="secondary_lang_no">
			<input id="secondary_lang_no" type="radio" name="secondary_language" checked="checked"/>
			<span class="radiofakebutton no" tabindex="0">
				<span lang="no">Norsk</span>
				<span lang="en">Norwegian</span>
			</span>
		</label>
		<label for="secondary_lang_ar">
			<input id="secondary_lang_ar" type="radio" name="secondary_language"/>
			<span class="radiofakebutton ar" tabindex="0">
				<span lang="ar" class="rtl">العربية</span>
				<span lang="no">Arabisk</span>
			</span>
		</label>
		<label for="secondary_lang_so">
			<input id="secondary_lang_so" type="radio" name="secondary_language"/>
			<span class="radiofakebutton so" tabindex="0">
				<span lang="so">SOOMAALI</span>
				<span lang="no">Somali</span>
			</span>
		</label>
		<label for="secondary_lang_ti">
			<input id="secondary_lang_ti" type="radio" name="secondary_language"/>
			<span class="radiofakebutton ti" tabindex="0">
				<span lang="ti">ትግርኛ</span>
				<span lang="no">Tigrinja</span>
			</span>
		</label>
		<label for="secondary_lang_img">
			<input id="secondary_lang_img" type="radio" name="secondary_language"/>
			<span class="radiofakebutton img" tabindex="0">
				<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-image"></use></svg>
			</span>
		</label>
	</fieldset>
	
</section>
HTML;
	return $output;
}

function lumbrikus_audiosync_markup_end() {
	$output=<<<HTML
<div class="translation-container">
	<div id="translation"></div>
</div><!-- .translation-container -->
HTML;
	return $output;
}

function get_slug($post_id) {
	$post = get_post( $post_id );
	return $post->post_name;
}

function get_parent_slug($post_id) {
	// get_the_ID() will get the post id from the loop
	$parent_id = wp_get_post_parent_id( $post_id );
	return get_slug($parent_id);
}