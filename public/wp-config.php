<?php
ini_set( 'display_errors', 0 );


// ========================
// Custom Content Directory
// ========================
define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/content' );
// get current path and then go one directory upwards
// define( 'WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/' . basename(dirname( __FILE__ )) . '/content' );


// ================================================
// You almost certainly do not want to change these
// ================================================
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );


// =========================
// Disable automatic updates
// =========================
define( 'AUTOMATIC_UPDATER_DISABLED', false );

// =======================
// Load WordPress Settings
// =======================
$table_prefix  = 'wp_';


// ===================================================
// Load database info and local development parameters
// ===================================================
require(dirname(__FILE__) . '/../config.php');

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', dirname( __FILE__ ) . '/cms/' );
}
require_once( ABSPATH . 'wp-settings.php' );

