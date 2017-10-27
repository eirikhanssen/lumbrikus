<?php 
/**
 * Template Name: Gjøre og lage (underside)
 * Template Post Type: page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<?php echo lumbrikus_internal_chapter_menu(2); ?>
<!-- BEGIN NAMED PAGE GJØRE OG LAGE UNDERSIDE -->	
<main class="site-main page-gjore-og-lage-underside underside" role="main">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'gjore-og-lage-underside' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END NAMED PAGE GJØRE OG LAGE UNDERSIDE -->	
<?php get_footer(); ?>