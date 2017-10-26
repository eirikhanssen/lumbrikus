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
    				$li .= "<div class=\"imagewrapper\">" . get_the_post_thumbnail($childpage) . "</div>";
				} else {
					$li .= "<p>[Mangler bilde]</p>";
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

function lumbrikus_make_chaptermenu(){
$out = '<nav class="chaptermenu-demo">';
$out .= '<ul>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-6"></use></svg><span class="desc">til oversikten</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-kort-fortelling"></use></svg><span class="desc">kort fortelling</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-lang-fortelling"></use></svg><span class="desc">lang fortelling</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-let-og-finn"></use></svg><span class="desc">let og finn</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-ord"></use></svg><span class="desc">ord</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-gjore-lage"></use></svg><span class="desc">gjøre og lage</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-filmer-inv"></use></svg><span class="desc">filmer</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-snutter"></use></svg><span class="desc">snutter</span></li>';
$out .= '<li><svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/media/svg/lumbrikus-symbol-icons.svg#icon-kviss"></use></svg><span class="desc">kviss</span></li>';
$out .= '</ul>';
$out .= '</nav>';
return $out;
}