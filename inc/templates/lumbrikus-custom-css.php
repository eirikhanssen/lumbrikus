<h1>Lumbrikus Custom CSS</h1>
<?php settings_errors(); ?>

<form id="save-custom-css-form" method="post" action="options.php" class="lumbrikus-general-form">
	<?php settings_fields( 'lumbrikus-custom-css-options' ); ?>
	<?php do_settings_sections( 'nafo_lumbrikus_css' ); ?>
	<?php submit_button(); ?>
</form>