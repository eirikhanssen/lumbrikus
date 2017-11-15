<?php 
/**
 * The template for displaying "Lang (fortelling)"
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<?php echo lumbrikus_internal_chapter_menu(1); ?>
<!-- BEGIN PAGE -->	
<main class="site-main page-lang">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'audiosync' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE -->	
<?php get_footer(); ?>
