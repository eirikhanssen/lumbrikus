<?php
/**
 * Template part for displaying page content in kort.php and lang.php
 * 
 * This template includes the common markup for audiosync pages
 * 
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */

?>
<!-- BEGIN CONTENT-PAGE AUDIOSYNC-->

<?php echo lumbrikus_make_text_links_to_children(get_the_ID()); ?>

	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div id="audiosync-flexcontainer">
	
		<div id="original-language-container">

			<?php echo lumbrikus_audiosync_markup_begin(); ?>
			
			<!-- BEGIN THE CONTENT -->

			<?php the_content(); ?>
			
			<!-- END THE CONTENT -->

		</div><!-- .original_language_container -->

		<div id="translation-language-container">
					
			<?php echo lumbrikus_audiosync_markup_end(); ?>

		</div><!-- .translation_language_container -->

	</div><!-- .audiosync_flexcontainer -->

<!-- END CONTENT-PAGE AUDIOSYNC -->