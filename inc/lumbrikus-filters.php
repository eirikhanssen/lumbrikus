<?php

//Add Page Slug to Body Class
function lumbrikus_add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}

function lumbrikus_add_parent_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) && $post->post_parent ) {
		$parent_slug = get_parent_slug( get_the_ID() );

		$classes[] = $parent_slug . '-child';
	}
	return $classes;
}

add_filter( 'body_class', 'lumbrikus_add_slug_body_class' );
add_filter( 'body_class', 'lumbrikus_add_parent_slug_body_class' );