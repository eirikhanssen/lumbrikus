<?php 
/**
 * The template for displaying "lærerveil" child pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<!-- BEGIN PAGE LÆRERVEIL UNDERSIDE -->	
<?php echo lumbrikus_page_TOC(); ?>
<main class="site-main page-laererveil-underside underside">


		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();
                    
					get_template_part( 'template-parts/content', 'laererveil-child' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE LÆRERVEIL UNDERSIDE -->	
<?php get_footer(); ?>