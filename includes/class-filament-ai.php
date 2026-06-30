<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI {

    public function __construct() {

        new Filament_AI_Shortcode();
        new Filament_AI_Assets();

        add_action('admin_notices', [$this, 'admin_notice']);
    }

    public function admin_notice() {

        echo '<div class="notice notice-success is-dismissible">';
        echo '<p><strong>Filament AI Plugin Loaded Successfully!</strong></p>';
        echo '</div>';
    }
}