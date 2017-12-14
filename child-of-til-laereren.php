<?php 
/**
 * The template for displaying "Til laereren" child pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<!-- BEGIN PAGE TIL LÆREREN UNDERSIDE -->	
<?php echo lumbrikus_page_TOC(); ?>
<main class="site-main page-til-laereren-underside underside">


		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();
                    
					get_template_part( 'template-parts/content', 'page' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE TIL LÆREREN UNDERSIDE -->	
<?php get_footer(); ?>