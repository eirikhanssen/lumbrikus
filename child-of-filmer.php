<?php 
/**
 * The template for displaying "Filmer" child pages
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
<!-- BEGIN PAGE FILMER UNDERSIDE -->	
<main class="site-main page-filmer-underside underside">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'filmer-underside' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE FILMER UNDERSIDE -->	
<?php get_footer(); ?>