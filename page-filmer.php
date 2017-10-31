<?php 
/**
 * The template for displaying "Filmer"
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
<main class="site-main page-filmer" role="main">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'filmer' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE -->	
<?php get_footer(); ?>
