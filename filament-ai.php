<?php
/**
 * Plugin Name: Filament AI
 * Description: AI-powered 3D Printing Analysis Plugin.
 * Version: 1.0.0
 * Author: Aniket Joshi
 * License: GPL2
 */

if (!defined('ABSPATH')) {
    exit;
}

/*
|--------------------------------------------------------------------------
| Plugin Constants
|--------------------------------------------------------------------------
*/

define('FILAMENT_AI_VERSION', '1.0.0');
define('FILAMENT_AI_PATH', plugin_dir_path(__FILE__));
define('FILAMENT_AI_URL', plugin_dir_url(__FILE__));

/*
|--------------------------------------------------------------------------
| Load Plugin Files
|--------------------------------------------------------------------------
*/

require_once FILAMENT_AI_PATH . 'includes/class-filament-ai.php';
require_once FILAMENT_AI_PATH . 'includes/class-filament-ai-shortcode.php';
require_once FILAMENT_AI_PATH . 'includes/class-filament-ai-assets.php';
require_once FILAMENT_AI_PATH . 'includes/class-filament-ai-settings.php';
require_once FILAMENT_AI_PATH . 'includes/class-filament-ai-pricing.php';
require_once FILAMENT_AI_PATH . 'includes/class-filament-ai-filaments.php';

add_filter('template_include', function ($template) {

    if (is_page('filament-ai')) {
        return FILAMENT_AI_PATH . 'templates/app-template.php';
    }

    return $template;
});

/*
|--------------------------------------------------------------------------
| Start Plugin
|--------------------------------------------------------------------------
*/

new Filament_AI();
new Filament_AI_Settings();
new Filament_AI_Pricing();
new Filament_AI_Filaments();