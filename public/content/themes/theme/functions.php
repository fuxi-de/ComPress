<?php

foreach( glob(__DIR__ . '/templates/modules/*/*.php') as $module_path ){
  require_once( $module_path );
}

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'loadScripts' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function loadScripts() {
        wp_enqueue_script( 'scripts', get_template_directory_uri() . '/dist/js/scripts.min.js', array('jquery'), '1.0.0', true );
    }

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new StarterSite();


/************ CLEAN UP WP ************/
function cubiq_setup () {
 remove_action('wp_head', 'wp_generator');                // removes the “generator” meta tag from the document header
 remove_action('wp_head', 'wlwmanifest_link');            // removes the “wlwmanifest” link
 remove_action('wp_head', 'rsd_link');                    //
 remove_action('wp_head', 'wp_shortlink_wp_head');        // No need for shortlink in the document head

 remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);    // removes a link to the next and previous post from the document header

 add_filter('the_generator', '__return_false');            // Removes the generator name from the RSS feeds.
 add_filter('show_admin_bar','__return_false');            // Hide adminbar

 // removes WP 4.2 emoji styles and JS. Nasty stuff.
 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
 remove_action( 'wp_print_styles', 'print_emoji_styles' );
}
add_action('after_setup_theme', 'cubiq_setup');
