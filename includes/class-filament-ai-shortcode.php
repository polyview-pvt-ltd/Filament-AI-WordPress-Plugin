<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Shortcode {

    public function __construct() {
        add_shortcode('filament_ai', [$this, 'render']);
    }

    public function render()
    {
        ob_start();
        ?>

        <div id="app"></div>

        <?php
        return ob_get_clean();
    }
}