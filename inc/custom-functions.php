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

function lumbrikus_get_direct_children_of_post($post_id) {
	$all_children = get_pages( array( 'child_of' => $post_id ) );
	$direct_children = [];

	foreach($all_children as $possible_child) {
		if($possible_child->post_parent == $post_id) {
			array_push($direct_children, $possible_child);
		}
	}
	return $direct_children;
}

function lumbrikus_has_childpage($post_id, $slug) {
	$post = get_post($post_id);
	$children = lumbrikus_get_direct_children_of_post($post->ID);
	foreach($children as $child) {
		if($child->post_name == $slug) {
			return true;
		}
	}
	// none of the children has the slug == the page doesn't exist
	return false;
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
	$icon_markup = '<svg class="icon"><use tabindex="-1" xlink:href="/media/svg/lumbrikus-symbol-icons.svg';

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

	// troubleshooting, trying png-background instead of svg icons in the menu
	$icon_markup = "";

	$output_LI = "    <li" . $li_class . "><a class=\"menulink\" href=\"" . $href . "\">" . $icon_markup . "<span class=\"linktext\">" . $linktext . "</span></a></li>\n";
	return $output_LI;
}

function get_chapter_root($post_id) {
	// the parent of the root page in each chapter's slug is 'kapitler'
	$post = get_post($post_id);
	
	while(true) {
		$parent_slug = get_post($post->post_parent)->post_name;

		if ($parent_slug == 'kapitler' || !get_post($post->post_parent) ) {
			// return the post id of the post that either has no parent, or that the parent's slug is 'kapitler'
			return $post->ID;
		}
		$post = get_post($post->post_parent);
	}
}

function lumbrikus_nav_internal_chapter_links($chapter, $lvl) {
	global $post;
	$chapter_root_id = get_chapter_root($post->ID);
	$children = lumbrikus_get_direct_children_of_post($chapter_root_id);
	$LIs = "";
	$tpl = basename( get_page_template() );
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
		switch($link[0]) {
			case '../':
				$LIs .= lumbrikus_generate_link_LI($chapter, $lvl, $link);
			break;
			case '':
				$LIs .= lumbrikus_generate_link_LI($chapter, $lvl, $link);
			break;
			default:
				/*if($tpl != 'child-of-kapitler--kapittel-hovedside.php') {
					$LIs .= lumbrikus_generate_link_LI($chapter, $lvl, $link);
				} else*/
				
				if(lumbrikus_has_childpage($chapter_root_id, $link[0])) {
					$LIs .= lumbrikus_generate_link_LI($chapter, $lvl, $link);
				}
			break;
		}
	}	

	$nav_internal_chapter_links = "\n<nav class=\"internal-chapter-links\">\n<h2 class=\"aural-only\">Naviger dette kapitlet</h2>  <ul>\n" . $LIs . "  </ul>\n</nav><!-- .internal_chapter_links -->\n";

	return $nav_internal_chapter_links;
}

function lumbrikus_get_chapter_num() {
	$current_url=$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	$pattern = '/^.+?\/kap-([0-9][0-9]).+$/i';
	if(strpos($current_url, '/kapitler/kap-') == false) {
		return "";
	}
	$replacement = '$1';
	$chapter_num = intval(preg_replace($pattern, $replacement, $current_url));
	return $chapter_num;
}

function lumbrikus_internal_chapter_menu($lvl) {
	$chapter_num = lumbrikus_get_chapter_num();

	return lumbrikus_nav_internal_chapter_links($chapter_num, $lvl);
}

function has_child_with_slug($slug) {
	global $post;
	$post_id =$post->ID;
	return false;
}

function lumbrikus_audiosync_markup_begin() {
	$output =<<<HTML
	<fieldset class="langselect" id="primary_language">
		<legend>tekst og lyd</legend>
		<div class="fieldset-flexcontainer">
			<label for="primary_lang_no" class="labelradiobtn" tabindex="0">
				<input id="primary_lang_no" type="radio" name="primary_language" checked="checked"/>
				<span class="radiofakebutton no">
					<span lang="no">Norsk</span>
					<span lang="en">Norwegian</span>
				</span>
			</label>
			<label for="primary_lang_ar" class="labelradiobtn" tabindex="0">
				<input id="primary_lang_ar" type="radio" name="primary_language"/>
				<span class="radiofakebutton ar">
					<span lang="ar" class="rtl">العربية</span>
					<span lang="no">Arabisk</span>
				</span>
			</label>
			<label for="primary_lang_so" class="labelradiobtn" tabindex="0">
				<input id="primary_lang_so" type="radio" name="primary_language"/>	
				<span class="radiofakebutton so">
					<span lang="so">SOOMAALI</span>
					<span lang="no">Somali</span>
				</span>
			</label>
			<label for="primary_lang_ti" class="labelradiobtn" tabindex="0">
				<input id="primary_lang_ti" type="radio" name="primary_language"/>
				<span class="radiofakebutton ti">
					<span lang="ti">ትግርኛ</span>
					<span lang="no">Tigrinja</span>
				</span>
			</label>
			<button type="button" aria-pressed="false" aria-label="image toggle" class="togglebutton image-toggle" id="btn-image-toggle" data-bodyclass="fullscreen">
				<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-image"></use></svg>
			</button>
			<button type="button" aria-pressed="false" aria-label="fullscreen toggle" class="togglebutton maxmin" id="btn-maxmin" data-bodyclass="fullscreen">
				<svg class="icon maximize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-maximize"></use></svg>
				<svg class="icon minimize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-minimize"></use></svg>
			</button>
		</div>
	</fieldset>
	<div class="showimage">
		<div class="buttons">
			<button type="button" aria-pressed="false" aria-label="maksimer bildet" class="showimage-maxmin" id="btn-primary-language-showimage-maxmin">
				<svg class="icon maximize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-maximize"></use></svg>
				<svg class="icon minimize"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-minimize"></use></svg>
			</button>
			<button type="button" aria-label="lukk bildet" class="showimage-close" id="btn-primary-language-showimage-close">
				<svg class="icon close"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-lukk"></use></svg>
			</button>
		</div>
	</div>
HTML;
	return $output;
}

function lumbrikus_audiosync_markup_end() {
	$output=<<<HTML

<fieldset class="langselect" id="secondary_language">
		<legend>tekst</legend>
		<div class="fieldset-flexcontainer">
			<label for="secondary_lang_no" class="labelradiobtn" tabindex="0">
				<input id="secondary_lang_no" type="radio" name="secondary_language" checked="checked"/>
				<span class="radiofakebutton no">
					<span lang="no">Norsk</span>
					<span lang="en">Norwegian</span>
				</span>
			</label>
			<label for="secondary_lang_ar" class="labelradiobtn" tabindex="0">
				<input id="secondary_lang_ar" type="radio" name="secondary_language"/>
				<span class="radiofakebutton ar">
					<span lang="ar" class="rtl">العربية</span>
					<span lang="no">Arabisk</span>
				</span>
			</label>
			<label for="secondary_lang_so" class="labelradiobtn" tabindex="0">
				<input id="secondary_lang_so" type="radio" name="secondary_language"/>
				<span class="radiofakebutton so">
					<span lang="so">SOOMAALI</span>
					<span lang="no">Somali</span>
				</span>
			</label>
			<label for="secondary_lang_ti" class="labelradiobtn" tabindex="0">
				<input id="secondary_lang_ti" type="radio" name="secondary_language"/>
				<span class="radiofakebutton ti">
					<span lang="ti">ትግርኛ</span>
					<span lang="no">Tigrinja</span>
				</span>
			</label>
			<label for="secondary_lang_img" class="labelradiobtn" tabindex="0">
				<input id="secondary_lang_img" type="radio" name="secondary_language"/>
				<span class="radiofakebutton img">
					<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-image"></use></svg>
				</span>
			</label>
		</div>
	</fieldset>
	<div id="translation-bg">
		<div id="translation"></div>
	</div>

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

function uplinks($num) {
	if($num < 1) {
		return "./";
	} else {
		$out = "";
		for($i = 0; $i < $num; $i++) {
			$out .= "../";
		}
		return $out;
	}
}

function lumbrikus_breadcrumbs() {
	$out = "<nav aria-label=\"Breadcrumb\" class=\"breadcrumb\">\n   <ol>\n";
	$bc = [];
	global $post;
	$p = $post;
	if($p->post_parent) {
		do {
			array_push($bc, $p->post_title);
			$p = get_post($p->post_parent);
			
			if(!$p->post_parent) {
				// reached the outermost parent
				array_push($bc, $p->post_title);
			}
		} while ($p->post_parent);
	} else {
		array_push($bc, $p->post_title);
	}

	// the splash page
	array_push($bc, "Lumbrikus");
	
	$bc = array_reverse($bc);

	$len = count($bc);

	$attr="";

	for( $i = 0; $i < $len; $i++) {
		$attr="";
		$svgicon="";
		if( $i == ($len - 1)) {
			$attr = " aria-current=\"page\"";
		} else if ($i == 0) {
			$attr = " title=\"lumbrikus startside\"";
			$svgicon = '<svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-lumbrikus-light"></use></svg> ';
		}
		$up = $len - $i -1;

		$out .= "<li>\n  <a href=\"" . uplinks($up) . "\"" . $attr . ">" . $svgicon . $bc[$i] . "</a>\n</li>";
	}
	  $out = $out . "</ol>\n	  </nav>\n";
	  return $out;
}

function lumbrikus_page_TOC($page_markup) {
	global $post;
	// lag liste over alle overskriftene
	// bruk javascript etterpå til å konvertere til lenker som lenker til riktig overskrift?
	// eller kjør gjennom et filter som legger til id til alle overskrifter først, slik at alle overskrifter i $page_markup har id.
	$toc = <<<TOC
<nav class="page_toc">
	<h2>På denne siden</h2>
	<ul>
		<li>Dummy heading</li>
		<li>Dummy heading</li>
	</ul>
</nav>
TOC;
	return $toc;
}