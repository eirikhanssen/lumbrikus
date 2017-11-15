<?php 
/**
 * The template for displaying "Gjøre og Lage" child pages
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
<!-- BEGIN PAGE GJØRE OG LAGE UNDERSIDE -->	
<main class="site-main page-gjore-og-lage-underside underside">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'gjore-og-lage-underside' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE GJØRE OG LAGE UNDERSIDE -->	
<?php get_footer(); ?>