<?php 
/**
 * The template for displaying "om lumbrikus"
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<!-- BEGIN PAGE om-lumbrikus -->	
<?php echo lumbrikus_page_TOC(); ?>
<main class="site-main om-lumbrikus">


		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();
                    
					get_template_part( 'template-parts/content', 'page' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE om-lumbrikus -->	
<?php get_footer(); ?>