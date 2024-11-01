<?php
/**
 * Plugin Name: Video Block for Ads
 * Description: Gutenberg Video Block and video player on steroids and low fat.
 * Author: Federico Jacobi
 * Author URI: https://federicojacobi.com
 * Version: 0.71
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
