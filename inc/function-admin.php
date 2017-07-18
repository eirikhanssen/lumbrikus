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