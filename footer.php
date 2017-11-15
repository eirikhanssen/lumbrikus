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
		<ul>
			<li><a href="/til-laereren/">Til læreren</a></li>
			<li><a href="/til-foreldrene/">Til foreldrene</a></li>
			<li><a href="/om-lumbrikus/">Om Lumbrikus</a></li>
			<li><a href="/kontakt-oss/">Kontakt</a></li>
		</ul>
	</nav>
</footer><!-- .page-footer -->
<?php
wp_footer();
echo "</body>\n</html>";