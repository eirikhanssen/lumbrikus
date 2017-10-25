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
<footer class="page-footer" role="contentinfo">
	<nav class="footer-nav">
		<ul>
			<li>
				<span>Til læreren</span>
				<ul><li>kapittel x</li></ul>
			</li>
			<li>
				<span>Til foreldrene</span>
				<ul><li>kapittel x</li></ul>
			</li>
			<li><span>Om Lumbrikus</span></li>
			<li><span>Kontakt</span></li>
		</ul>
	</nav>
</footer><!-- .page-footer -->
<?php
wp_footer();
echo "</body>\n</html>";