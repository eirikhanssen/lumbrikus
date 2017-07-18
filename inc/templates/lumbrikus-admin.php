<h1>Lumbrikus Theme Options</h1>
<p>Nothing here yet...</p>
<?php settings_errors(); ?>
<form method="post" action="options.php">
	<?php settings_fields( 'lumbrikus-settings-group' ); ?>
	<?php do_settings_sections( 'nafo_lumbrikus' ); ?>
	<?php submit_button(); ?>
</form>