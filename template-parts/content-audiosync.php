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
<?php echo lumbrikus_make_text_links_to_children(get_the_ID()); ?>
<!-- BEGIN CONTENT-PAGE -->
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

<?php echo lumbrikus_audiosync_markup_begin(); ?>
<!-- BEGIN THE CONTENT -->		

		<?php the_content(); ?>

<!-- END THE CONTENT -->		
<?php echo lumbrikus_audiosync_markup_end(); ?>
<!-- END CONTENT-PAGE -->