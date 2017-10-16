<?php 
	
	/*
		This is the template for the hedaer
		
		@package lumbrikustheme
	*/
	
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<title><?php bloginfo( 'name' ); wp_title(); ?></title>
		<meta name="description" content="<?php bloginfo( 'description' ); ?>">
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<?php wp_head(); ?>
	
		<?php 
			$custom_css = esc_attr( get_option( 'lumbrikus_css' ) );
			if( !empty( $custom_css ) ):
				echo '<style id="custom_css">' . $custom_css . '</style>';
			endif;
		?>
		
	</head>

<body <?php body_class(); ?>>
<header class="siteheader">
	<a href="/" title="lumbrikus startside">
	<h1 class="site-title lumbrikus-icon"><?php bloginfo( 'name' ); ?></h1>
	<p class="site-description"><?php bloginfo( 'description' ); ?></p>
	</a>
</header>
