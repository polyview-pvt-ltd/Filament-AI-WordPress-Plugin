<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Assets
{
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
    }

    public function enqueue_assets()
    {
        // Load CSS
        wp_enqueue_style(
            'filament-ai-style',
            FILAMENT_AI_URL . 'build/assets/index.css',
            [],
            FILAMENT_AI_VERSION
        );

        // Load JavaScript
        wp_enqueue_script(
            'filament-ai-script',
            FILAMENT_AI_URL . 'build/assets/index.js',
            [],
            FILAMENT_AI_VERSION,
            true
        );

        // Pass WordPress settings to Vue
        wp_localize_script(
            'filament-ai-script',
            'filamentAI',
            [
                // Backend Settings
                'backendUrl' => get_option(
                    'filament_ai_backend_url',
                    'http://127.0.0.1:8000'
                ),

                'username' => get_option(
                    'filament_ai_backend_username',
                    ''
                ),

                'password' => get_option(
                    'filament_ai_backend_password',
                    ''
                ),

                // Pricing Settings
                'electricityCost' => get_option(
                    'filament_ai_electricity_cost',
                    8
                ),

                'labourCost' => get_option(
                    'filament_ai_labour_cost',
                    50
                ),

                'profitMargin' => get_option(
                    'filament_ai_profit_margin',
                    20
                ),

                'tax' => get_option(
                    'filament_ai_tax',
                    18
                ),
            ]
        );
    }
}