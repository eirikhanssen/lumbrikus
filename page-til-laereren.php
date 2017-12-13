<?php 
/**
 * The template for displaying "Til læreren"
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
<main class="site-main page-til-laereren">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					$post_id = get_the_ID();

					$current_post = get_post($post_id);

					$current_post_content = $current_post->post_content;

					// create a TOC based on $current_post_content ( have to add missing id and fix links with javascript afterwords )

					lumbrikus_page_TOC($current_post_content);

					get_template_part( 'template-parts/content', 'page' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE -->	
<?php get_footer(); ?>