<?php

/**
 * Plugin Name:     BWL Gutenberg Services Block
 * Description:       A functional Gutenberg Services Block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Mahbub Alam Khan
 * Author URI:      https://bluewindlab.net
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bwl-gt-services
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}


function bwl_gt_services_bwl_gt_services_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'bwl_gt_services_bwl_gt_services_block_init');
