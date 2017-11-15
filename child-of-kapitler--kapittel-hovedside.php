<?php 
/**
 * The template for displaying "Kapittel hovedside" for each chapter
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<?php echo lumbrikus_internal_chapter_menu(0); ?>

<!-- BEGIN NAMED PAGE KAPITTEL HOVEDSIDE -->

<main class="site-main kapittel-hovedside">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'kapittel-hovedside' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END NAMED PAGE KAPITTEL HOVEDSIDE -->	
<?php get_footer(); ?>