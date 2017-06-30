<?php

/*
	
@package sunsettheme
	
	========================
		ADMIN PAGE
	========================
*/

function lumbrikus_add_admin_page() {
	
	//Generate Lumbrikus Admin Page
	add_menu_page( 'Lumbrikus Theme Options', 'Lumbrikus', 'manage_options', 'nafo_lumbrikus', 'lumbrikus_theme_create_page', get_template_directory_uri() . '/img/lumbrikus_icon.png', 110 );
	
	//Generate Lumbrikus Admin Sub Pages
	add_submenu_page( 'nafo_lumbrikus', 'Lumbrikus Theme Options', 'General', 'manage_options', 'nafo_lumbrikus', 'lumbrikus_theme_create_page' );
	add_submenu_page( 'nafo_lumbrikus', 'Lumbrikus CSS Options', 'Custom CSS', 'manage_options', 'nafo_lumbrikus_css', 'lumbrikus_theme_settings_page');
	
	
	
}
add_action( 'admin_menu', 'lumbrikus_add_admin_page' );

//Activate custom settings
	add_action( 'admin_init', 'lumbrikus_custom_settings' );

function lumbrikus_custom_settings() {
	register_setting( 'lumbrikus_settings_group', 'first_name' );
	add_settings_section( 'lumbrikus_sidebar_options', 'Sidebar Option', 'lumbrikus_sidebar_options', 'nafo_lumbrikus');
	add_settings_field( 'sidebar_name', 'First Name', 'lumbrikus_sidebar_name', 'nafo_lumbrikus', 'lumbrikus_sidebar_options');
}

function lumbrikus_sidebar_options() {
	echo 'Customize your Sidebar Information';
}

function lumbrikus_sidebar_name() {
	$firstName = esc_attr( get_option( 'first_name' ) );
	echo '<input type="text" name="first_name" value="'.$firstName.'" placeholder="First Name" />';
}


function lumbrikus_theme_create_page() {
	require_once( get_template_directory() . '/inc/templates/lumbrikus_admin.php' );
}

function lumbrikus_theme_settings_page() {
	
	echo '<h1>Lumbrikus Custom CSS</h1>';
	
}