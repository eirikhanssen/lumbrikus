<?php 
/**
 * The standard header for Lumbrikus theme
 *
 * This is the template that displays all of the <head> section and everything up until body > header:first-child()
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */	
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-179028506-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-179028506-1', { 'anonymize_ip': true });
</script>
<meta name="google-site-verification" content="FQpewIXn3jZinJDatS-e6TlU5V5oPJm-a9VNYRM5WWQ" />
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
	<?php echo lumbrikus_breadcrumbs(); ?>
	<?php echo lumbrikus_generate_chapter_context_links(); ?>
</header>
