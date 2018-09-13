<?php
ini_set( 'display_errors', 0 );

// ===================================================
// Load database info and local development parameters
// ===================================================
if ( file_exists( dirname( __FILE__ ) . '/../production-config.php' ) ) {
    define( 'WP_LOCAL_DEV', false );
    include( dirname( __FILE__ ) . '/../production-config.php' );
    define( 'WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/smr_relaunch/' . basename(dirname( __FILE__ )) . '/content' );
} else {
    define( 'WP_LOCAL_DEV', true );
    include( dirname( __FILE__ ) . '/../local-config.php' );
    define( 'WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/' . basename(dirname( __FILE__ )) . '/content' );
}

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



// ======================
// Hide errors by default
// ======================
define( 'WP_DEBUG_DISPLAY', false );
define( 'WP_DEBUG', false );

// =========================
// Disable automatic updates
// =========================
define( 'AUTOMATIC_UPDATER_DISABLED', false );

// =======================
// Load WordPress Settings
// =======================
$table_prefix  = 'wp_';

if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', dirname( __FILE__ ) . '/cms/' );
}
require_once( ABSPATH . 'wp-settings.php' );
