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
	wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery-1.12.4.min.js', false, '1.11.4' , true);

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
	wp_enqueue_style( 'lumbrikus', get_template_directory_uri() . '/css/lumbrikus.css', array(), '1.0.0', 'all' );
	
	/* register scripts */
	lumbrikus_include_custom_jquery();
	//wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap-3.3.7.min.js', array('jquery'), '1.12.4', true );
	wp_enqueue_script( 'svgxuse', get_template_directory_uri() . '/js/svgxuse.min.js', array('jquery'), '1.2.6', true );
	wp_enqueue_script( 'lumbrikus', get_template_directory_uri() . '/js/lumbrikus.js', array('jquery'), '1.0.0', true );
	
}
add_action( 'wp_enqueue_scripts', 'lumbrikus_load_scripts' );