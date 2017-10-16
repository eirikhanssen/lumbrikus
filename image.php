<?php
/**
 * The template for displaying image attachments
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since Lumbrikus 0.0.2
 */

get_header(); ?>
<main id="main" class="site-main" role="main">

<article class="attachment-page-image">

<?php 
$att_meta = lumbrikus_get_attachment_meta(get_the_id());
//$output = "<dl>";
//$output .= "<dt>alt</dt><dd>" . $att_meta['alt'] . "</dd>\n";
//$output .= "<dt>caption</dt><dd>" . $att_meta['caption'] . "</dd>\n";
//$output .= "<dt>description</dt><dd>" . $att_meta['description'] . "</dd>\n";
//$output .= "<dt>href</dt><dd>" . $att_meta['href'] . "</dd>\n";
//$output .= "<dt>src</dt><dd>" . $att_meta['src'] . "</dd>\n";
//$output .= "<dt>title</dt><dd>" . $att_meta['title'] . "</dd>\n";
//$output .= "</dl>\n";

//echo $output;
?>

<figure>
	<?php echo wp_get_attachment_image( get_the_ID(), 'large' ); ?>
	<figcaption>
		<h1><?php the_title(); ?></h1>
		<p class="captiontext"><?php echo $att_meta['caption'];?></p>
	</figcaption>
	
</figure>

<h2>Beskrivelse/rettigheter</h2>
<p><?php echo $att_meta['description'];?></p>

<h2>Forskjellige filstørrelser</h2>

<p class='resolutions'>
		<?php
			$images = array();
			$image_sizes = get_intermediate_image_sizes();
			array_unshift( $image_sizes, 'full' );
			foreach( $image_sizes as $image_size ) {
				$image = wp_get_attachment_image_src( get_the_ID(), $image_size );
				$name = $image_size . ' (' . $image[1] . 'x' . $image[2] . ')';
				$images[] = '<a href="' . $image[0] . '">' . $name . '</a>';
			}
			echo implode( ' | ', $images );
		?>
</p>

</article>
</main><!-- .site-main -->

<?php// get_sidebar(); ?>
<?php get_footer(); ?>