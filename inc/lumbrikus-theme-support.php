<?php
# when generating links to child-pages, it will be possible to use the featured image of the child page in the link.
function lumbrikus_theme_support() {
	add_theme_support( 'post-thumbnails' ); 
	set_post_thumbnail_size( 200, 150 );	
}

add_action( 'after_setup_theme', 'lumbrikus_theme_support' );