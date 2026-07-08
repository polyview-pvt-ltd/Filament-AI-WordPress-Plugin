<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Orders
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_orders_page']);
    }

    /**
     * Add Orders submenu
     */
    public function add_orders_page()
    {
        add_submenu_page(
            'filament-ai-settings',
            'Orders',
            'Orders',
            'manage_options',
            'filament-ai-orders',
            [$this, 'render_orders_page']
        );
    }

    /**
     * Render Orders Page
     */
    public function render_orders_page()
    {
        $backend_url = get_option(
            'filament_ai_backend_url',
            'http://192.168.1.39:8000'
        );

        // Login and get JWT token
        $token = Filament_AI_API::get_access_token();

        if (is_wp_error($token)) {

            echo '<div class="notice notice-error">';
            echo '<p><strong>Login Error:</strong> ';
            echo esc_html($token->get_error_message());
            echo '</p>';
            echo '</div>';

            return;
        }

        // Fetch Orders
        $response = wp_remote_get(
            $backend_url . '/orders',
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Accept' => 'application/json',
                ],
                'timeout' => 30,
            ]
        );

        ?>

        <div class="wrap">

            <h1>Orders</h1>

            <?php

            // Connection Error
            if (is_wp_error($response)) {

                echo '<div class="notice notice-error">';
                echo '<p><strong>Connection Error:</strong> ';
                echo esc_html($response->get_error_message());
                echo '</p>';
                echo '</div>';

                return;
            }

            // Decode JSON Response
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
                echo '<p>No orders found.</p>';
                echo '</div>';

                return;
            }

            // Orders Table
            echo '<table class="widefat fixed striped">';

            echo '<thead>';
            echo '<tr>';
            echo '<th>STL File</th>';
            echo '<th>Material</th>';
            echo '<th>Material Required (g)</th>';
            echo '<th>Print Time</th>';
            echo '<th>Download STL</th>';
            echo '<th>Download G-code</th>';
            echo '</tr>';
            echo '</thead>';

            echo '<tbody>';

            foreach ($body['orders'] as $order) {

                echo '<tr>';

                // STL File
                echo '<td>' . esc_html($order['stl_file_name']) . '</td>';

                // Material
                echo '<td>' . esc_html($order['material']) . '</td>';

                // Material Required
                echo '<td>' . esc_html($order['material_required_grams']) . ' g</td>';

                // Print Time
                echo '<td>' . esc_html($order['print_time']) . '</td>';

                // Download STL
                echo '<td>';
                echo '<a class="button" href="' .
                    admin_url(
                        'admin.php?page=filament-ai-orders&action=download_stl&order_id=' .
                        urlencode($order['order_id'])
                    ) .
                    '">Download STL</a>';
                echo '</td>';

                // Download G-code
                echo '<td>';
                echo '<a class="button" href="' .
                    admin_url(
                        'admin.php?page=filament-ai-orders&action=download_gcode&order_id=' .
                        urlencode($order['order_id'])
                    ) .
                    '">Download G-code</a>';
                echo '</td>';

                echo '</tr>';
            }

            echo '</tbody>';

            echo '</table>';

            ?>

        </div>

        <?php
    }
}