<?php 
/**
 * The template for displaying "Kviss"
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
get_header(); 
$quiz_number = 6;
?>

<!-- BEGIN PAGE -->	
<main id="kviss" class="site-main page-kviss kviss" role="main" data-quiz-number="<?php echo $quiz_number; ?>">

		<?php 
			
			if( have_posts() ):
				
				while( have_posts() ): the_post();

					get_template_part( 'template-parts/content', 'page' );
				
				endwhile;
				
			endif;
        
		?>
	
</main>
<!-- END PAGE -->	
<?php get_footer(); ?>
