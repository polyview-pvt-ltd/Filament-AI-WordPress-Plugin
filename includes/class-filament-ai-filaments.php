<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Filaments
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_filaments_page']);
    }

    public function add_filaments_page()
    {
        add_submenu_page(
            'filament-ai-settings',
            'Filaments',
            'Filaments',
            'manage_options',
            'filament-ai-filaments',
            [$this, 'render_filaments_page']
        );
    }

    public function render_filaments_page()
    {
        $backend_url = get_option(
            'filament_ai_backend_url',
            'http://192.168.1.39:8000'
        );

        $response = wp_remote_get(
            $backend_url . '/filaments'
        );

        ?>

        <div class="wrap">

            <h1>Filaments</h1>

            <?php

            // Connection Error
            if (is_wp_error($response)) {

                echo '<div class="notice notice-error">';
                echo '<p><strong>Connection Error:</strong> ';
                echo esc_html($response->get_error_message());
                echo '</p></div>';

                return;
            }

            // Decode JSON
            $body = json_decode(
                wp_remote_retrieve_body($response),
                true
            );

            // API Error
            if (
                empty($body) ||
                !isset($body['success']) ||
                !$body['success']
            ) {

                echo '<div class="notice notice-warning">';
                echo '<p>No filament data found.</p>';
                echo '</div>';

                return;
            }

            // Filaments Table
            echo '<table class="widefat fixed striped">';

            echo '<thead>';
            echo '<tr>';
            echo '<th width="60">#</th>';
            echo '<th>Material Type</th>';
            echo '<th>Maker</th>';
            echo '<th width="150">Cost / Kg (₹)</th>';
            echo '<th width="150">Density (g/cm³)</th>';
            echo '</tr>';
            echo '</thead>';

            echo '<tbody>';

            $count = 1;

            foreach ($body['filaments'] as $filament) {

                echo '<tr>';

                echo '<td>' . $count++ . '</td>';

                echo '<td>' . esc_html($filament['material_type']) . '</td>';

                echo '<td>' . esc_html($filament['brand']) . '</td>';

                echo '<td>₹ ' . number_format((float)$filament['cost_per_kg'], 2) . '</td>';

                echo '<td>' . esc_html($filament['density']) . '</td>';

                echo '</tr>';
            }

            echo '</tbody>';

            echo '</table>';

            ?>

        </div>

        <?php
    }
}