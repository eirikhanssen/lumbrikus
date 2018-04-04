<?php 
/**
 * The template for displaying "teknisk" page
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<!-- BEGIN PAGE TEKNISK -->	
<?php echo lumbrikus_page_TOC(); ?>
<main class="site-main page-teknisk">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();
                    
					get_template_part( 'template-parts/content', 'page' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE TEKNISK -->	
<?php get_footer(); ?>