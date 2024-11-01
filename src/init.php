<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function vbwa_get_settings() {
	$settings = get_option( 'vbwa-settings' );

	return wp_parse_args( $settings, array(
		'active_skin'      => 'default',
		'default_adtag'    => '',
		'dfp_adtag'        => false,
		'vastloadtimeout'  => 5000,
		'loadvideotimeout' => 8000,
		'timeout'          => 5000,
		'hls'              => false,
	) );
}

function vbwa_get_skins() {
	$default = array(
		'default'   => plugins_url( 'dist/vbwa-default-skin.css', dirname( __FILE__ ) ),
		'youtube'   => plugins_url( 'dist/vbwa-youtube-skin.css', dirname( __FILE__ ) ),
		'magnified' => plugins_url( 'dist/vbwa-magnified-skin.css', dirname( __FILE__ ) ),
		'techskin'  => plugins_url( 'dist/vbwa-techskin-skin.css', dirname( __FILE__ ) ),
	);
	return apply_filters( 'vbwa_skins', $default );
}

function vbwa_get_active_skin_url() {
	$settings = vbwa_get_settings();
	$skins    = vbwa_get_skins();

	if ( ! in_array( $settings['active_skin'], array_keys( $skins ), true ) ) {
		$settings['active_skin'] = 'default';
	}

	return apply_filters( 'vbwa_active_skin_url', $skins[ $settings['active_skin'] ] );
}

require_once( 'class-vbwa-admin.php' );
new VBWA_Admin();

require_once( 'class-video-plus.php' );
new Video_Plus();
