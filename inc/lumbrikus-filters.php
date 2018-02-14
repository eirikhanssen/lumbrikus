<?php

//Add Page Slug to Body Class
function lumbrikus_add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_name;
	}
	return $classes;
}

function lumbrikus_add_parent_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) && $post->post_parent ) {
		$parent_slug = get_parent_slug( get_the_ID() );

		$classes[] = $parent_slug . '-child ' . 'child-of-' . $parent_slug;
	}
	return $classes;
}

function lumbrikus_add_chapter_to_body_class ( $classes ) {
	global $post;
	$chapter = lumbrikus_get_chapter_num();
	if($chapter != "") {
		/*if($chapter < 10) {
			$chapter = '0' . $chapter;
		}*/
		$classes[] = 'kap-' . $chapter;
	} else {
		$classes[] = "";
	}
	return $classes;
}

add_filter( 'body_class', 'lumbrikus_add_slug_body_class' );
add_filter( 'body_class', 'lumbrikus_add_parent_slug_body_class' );
add_filter( 'body_class', 'lumbrikus_add_chapter_to_body_class' );
add_filter( 'page_template', function ( $template )
{
	global $post;
	
	$locate_template = null;

	if($post->post_parent == 0) {
		// make sure top level pages aren't affected
		return $template;
	}

	switch(get_post($post->post_parent)->post_name) {
		case 'filmer':
			$locate_template = locate_template( 'child-of-filmer.php' );
		break;
		case 'gjore-og-lage':
			$locate_template = locate_template( 'child-of-gjore-og-lage.php' );
		break;
		case 'snutter':
			$locate_template = locate_template( 'child-of-snutter.php' );
		break;
		case 'kapitler':
		$locate_template = locate_template( 'child-of-kapitler--kapittel-hovedside.php' );
		break;
		case 'laererveil':
		$locate_template = locate_template( 'child-of-laererveil.php' );
		break;
		default:
			return $template;
	}

    // Check if our template was found, if not, bail
    if ( !$locate_template )
        return $template;

    return $locate_template;
});