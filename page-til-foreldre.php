<?php 
/**
 * The template for displaying "Til foreldre"
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>

<!-- BEGIN PAGE -->	
<main class="site-main page-til-foreldre">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'til-foreldre' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE -->	
<?php get_footer(); ?>
