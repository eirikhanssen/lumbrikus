<?php
/**
 * Template part for displaying page content in page-kapittel-hovedside.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */

?>
<!-- BEGIN CONTENT-PAGE-KAPITTEL-HOVEDSIDE -->
<article id="page-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
	<div class="entry-content">

<!-- BEGIN THE CONTENT -->

<?php the_content(); ?>

<!-- END THE CONTENT -->		

	</div><!-- .entry-content -->
</article><!-- #page-## -->

<!-- END CONTENT-PAGE-KAPITTEL-HOVEDSIDE -->