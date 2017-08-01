<?php

/*
	
@package lumbrikustheme
	
	========================
		ADMIN PAGE
	========================
*/

function lumbrikus_add_admin_page() {
	
	//Generate Lumbrikus Admin Page
	add_menu_page( 'Lumbrikus Theme Options', 'Lumbrikus', 'manage_options', 'nafo_lumbrikus', 'lumbrikus_theme_admin_page', get_template_directory_uri() . '/img/l.icon.png', 110 );
	
	//Generate Lumbrikus Admin Sub Pages
	add_submenu_page( 'nafo_lumbrikus', 'Lumbrikus Theme Options', 'General', 'manage_options', 'nafo_lumbrikus', 'lumbrikus_theme_admin_page' );
	add_submenu_page( 'nafo_lumbrikus', 'Lumbrikus CSS Options', 'Custom CSS', 'manage_options', 'nafo_lumbrikus_css', 'lumbrikus_theme_custom_css_page');
	
	
	
}
add_action( 'admin_menu', 'lumbrikus_add_admin_page' );

//Activate custom settings
add_action( 'admin_init', 'lumbrikus_custom_settings' );

function lumbrikus_custom_settings() {
	//  Add customizations here....

	// Theme Support Options


	// Custom CSS Options

	register_setting( 'lumbrikus-custom-css-options', 'lumbrikus_css', 'lumbrikus_sanitize_custom_css' );
	
	add_settings_section( 'lumbrikus-custom-css-section', 'Custom CSS', 'lumbrikus_custom_css_section_callback', 'nafo_lumbrikus_css' );
	
	add_settings_field( 'custom-css', 'Insert your Custom CSS', 'lumbrikus_custom_css_callback', 'nafo_lumbrikus_css', 'lumbrikus-custom-css-section' );





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

function lumbrikus_theme_support_page() {
	require_once( get_template_directory() . '/inc/templates/lumbrikus-theme-support.php' );
}

function lumbrikus_theme_custom_css_page() {
	require_once( get_template_directory() . '/inc/templates/lumbrikus-custom-css.php' );
}