<?php 
/**
 * Template Name: Snutter (underside)
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

<!-- BEGIN NAMED PAGE SNUTTER UNDERSIDE -->	
<main class="site-main page-snutter-underside underside" role="main">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'snutt' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END NAMED PAGE SNUTTER UNDERSIDE -->	
<?php get_footer(); ?>