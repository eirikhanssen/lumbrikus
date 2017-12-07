<?php

/*
	
@package lumbrikustheme
	
	========================
		ADMIN ENQUEUE FUNCTIONS
	========================
*/

// include custom jQuery
function lumbrikus_include_custom_jquery() {
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', '/js/lib/jquery-1.12.4.min.js', false, '1.12.4' , false);

}
//add_action('wp_enqueue_scripts', 'lumbrikus_include_custom_jquery');



function lumbrikus_load_admin_scripts( $hook ){
	echo '<p class="hook"> <strong> hook: </strong>' .  '<em> ' . $hook . '</em>';
	if( 'toplevel_page_nafo_lumbrikus' == $hook ){ 
		wp_register_style( 'lumbrikus_admin', get_template_directory_uri() . '/css/lumbrikus.admin.css', array(), '0.0.1', 'all' );
		wp_enqueue_style( 'lumbrikus_admin' );
		wp_enqueue_media();
		wp_register_script( 'lumbrikus-admin-script', get_template_directory_uri() . '/js/lumbrikus.admin.js', array('jquery'), '1.0.0', true );
		wp_enqueue_script( 'lumbrikus-admin-script' );
	
	} else if ( 'lumbrikus_page_nafo_lumbrikus_css' == $hook ){
		wp_enqueue_style( 'ace_css', get_template_directory_uri() . '/css/lumbrikus.ace.css', array(), '1.0.0', 'all' );
		wp_enqueue_script( 'ace', get_template_directory_uri() . '/js/ace/ace.js', array('jquery'), '1.12.4', true );
		wp_enqueue_script( 'lumbrikus-custom-css-script', get_template_directory_uri() . '/js/lumbrikus.custom_css.js', array('jquery'), '1.0.0', true );
	
	} else { 

	}
	
}
add_action( 'admin_enqueue_scripts', 'lumbrikus_load_admin_scripts' );


/*
	========================
		FRONT-END ENQUEUE FUNCTIONS
	========================
*/

function lumbrikus_load_scripts() {
	
	/* register styles */
	// wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '3.3.6', 'all' );
	wp_enqueue_style( 'normalize', get_template_directory_uri() . '/css/normalize.css', array(), '7.0.0', 'all' );
	wp_enqueue_style( 'googlefonts', 'https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:300|Roboto', array(), '0.0.5', 'all' );
	wp_enqueue_style( 'lumbrikusCSS', get_template_directory_uri() . '/css/lumbrikus.css', array(), '1.3.5', 'all' );
	
	/* register scripts */
	lumbrikus_include_custom_jquery();

	//wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap-3.3.7.min.js', array('jquery'), '1.12.4', true );
	wp_enqueue_script( 'svgxuse', '/js/lib/svgxuse.min.js', array('jquery'), '1.2.6', true );
	
	wp_enqueue_script( 'lumbrikus', get_template_directory_uri() . '/js/lumbrikus.js', array('jquery'), '0.0.1', true );

	if( is_page( 'kviss' ) ) {
		wp_enqueue_style( 'kviss', '/css/kviss.css', array(), '0.0.9', 'all' );
		wp_enqueue_script( 'kviss-js', '/js/kviss.js', array('jquery'), '0.1.9', true );
	}

	if( is_page( 'kort' ) || is_page( 'lang' ) ) {
		// enqueue js and css for text and audio playback/sync
		// the order of enquing the scripts is significant - mejs needs to be enqueued before the other scripts
		wp_enqueue_style( 'mediasyncCSS', '/css/mediasync.css', array(), '0.2.3', 'all' );
		wp_enqueue_style( 'mejsCSS', '/lib/mediaelement/build/mediaelementplayer.css', array(), '4.2.6', 'all' );
		wp_enqueue_script( 'mejs', '/lib/mediaelement/build/mediaelement-and-player.js', false, '4.2.6', true);
		wp_enqueue_script( 'mediasyncJS', '/js/mediasync.js', false, '0.9.5', true);
		wp_enqueue_script( 'langselectJS', '/js/langselect.js', false, '0.9.6', true);
	}	
}
add_action( 'wp_enqueue_scripts', 'lumbrikus_load_scripts' );