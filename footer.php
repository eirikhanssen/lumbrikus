<?php
/**
 * The template for displaying the footer
 *
 * Contains the <footer>, scripts that go in the footer and closes <body> and <html>
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Lumbrikus
 * @since 1.0
 * @version 1.0
 */
echo "<!-- BEGIN FOOTER -->\n";
?>
<footer class="page-footer">
	<nav class="footer-nav">
		<h2 class="aural-only">Til informasjon om ressursen</h2>
		<ul>
			<li><?php echo til_eleven_link(); ?></li>
			<li><?php echo laererveil_link(); ?></li>
			<li><?php echo til_foreldre_link(); ?></li>
			<li><a href="/om-lumbrikus/">Om Lumbrikus</a></li>
			<li><a href="/kontakt-oss/">Kontakt</a></li>
		</ul>
	</nav>
</footer><!-- .page-footer -->
<?php
wp_footer();
echo "</body>\n</html>";