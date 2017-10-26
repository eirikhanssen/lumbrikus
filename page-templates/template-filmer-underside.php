<?php 
/**
 * Template Name: Filmer (underside)
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

<!-- BEGIN NAMED PAGE FILMER UNDERSIDE -->	
<main class="site-main page-filmer-underside underside" role="main">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'filmer-underside' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END NAMED PAGE FILMER UNDERSIDE -->	
<?php get_footer(); ?>