<?php

/*
	
@package lumbrikustheme
	
	========================
		ADMIN PAGE
	========================
*/

function lumbrikus_add_admin_page() {
	
	//Generate Lumbrikus Admin Page
	add_menu_page(
		'Lumbrikus Theme Options', // page title
		'Lumbrikus', //menu title
		'manage_options', // capability
		'nafo_lumbrikus', // menu slug
		'lumbrikus_theme_admin_page', // callable function
		get_template_directory_uri() . '/img/l.icon.png', // icon url
		110 // position
		);
	
	//Generate Lumbrikus Admin Sub Pages
	
	add_submenu_page(
		'nafo_lumbrikus', // str parent slug
		'Lumbrikus Theme Options', // str page title
		'General', // str menu title
		'manage_options', // str capability
		'nafo_lumbrikus', // str menu slug
		'lumbrikus_theme_admin_page' // str callable function
		);

	add_submenu_page( 
		'nafo_lumbrikus', // str parent slug
		'Lumbrikus CSS Options', // str page title
		'Custom CSS', // str menu title
		'manage_options', // str capability
		'nafo_lumbrikus_css', // str menu slug
		'lumbrikus_theme_custom_css_page' // str callable function
		);
}

add_action( 'admin_menu', 'lumbrikus_add_admin_page' );

//Activate custom settings

add_action( 
	'admin_init', // str tag
	'lumbrikus_custom_settings' // callable function
	);

function lumbrikus_custom_settings() {
	//  Add customizations here....

	// Theme Support Options

	// Custom CSS Options

	register_setting(
		'lumbrikus-custom-css-options', // str option group
		'lumbrikus_css', // str option name
		'lumbrikus_sanitize_custom_css' // callback function (sanitizer)
		);
	
	add_settings_section( 
		'lumbrikus-custom-css-section', // str id
		'Custom CSS', // str title
		'lumbrikus_custom_css_section_callback', // callback function
		'nafo_lumbrikus_css' // str page
		);
	
	add_settings_field( 
		'custom-css', // str id
		'Insert your Custom CSS', // str title
		'lumbrikus_custom_css_callback', // callable callback function
		'nafo_lumbrikus_css',  // str page
		'lumbrikus-custom-css-section' // str section
		);


} // lumbrikus custom settings

// Callbacks
function lumbrikus_custom_css_section_callback() {
	echo 'Customize Sunset Theme with your own CSS';
}

function lumbrikus_custom_css_callback() {
	$css = get_option( 'lumbrikus_css' );
	$css = ( empty($css) ? '/* Lumbrikus Theme Custom CSS */' : $css );
	echo '<div id="customCss">'.$css.'</div><textarea id="lumbrikus_css" name="lumbrikus_css" style="display:none;visibility:hidden;">'.$css.'</textarea>';
}


//Template submenu functions
function lumbrikus_theme_admin_page() {
	require_once( get_template_directory() . '/inc/templates/lumbrikus-admin.php' );
}

function lumbrikus_theme_custom_css_page() {
	require_once( get_template_directory() . '/inc/templates/lumbrikus-custom-css.php' );
}