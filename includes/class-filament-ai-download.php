<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Download
{
    public function __construct()
    {
        add_action('admin_init', [$this, 'handle_download']);
    }

    public function handle_download()
    {
        // Check if this is a download request
        if (
            !isset($_GET['action']) ||
            !isset($_GET['order_id'])
        ) {
            return;
        }

        $action = sanitize_text_field($_GET['action']);
        $order_id = sanitize_text_field($_GET['order_id']);

        // Only allow our download actions
        if (
            $action !== 'download_stl' &&
            $action !== 'download_gcode'
        ) {
            return;
        }

        // Login to backend and get JWT token
        $token = Filament_AI_API::get_access_token();

        if (is_wp_error($token)) {
            wp_die(
                'Backend Login Failed: ' .
                esc_html($token->get_error_message())
            );
        }

        // Backend URL
        $backend_url = get_option(
            'filament_ai_backend_url',
            'http://192.168.1.39:8000'
        );

        // Decide backend endpoint
        if ($action === 'download_stl') {

            $endpoint =
                '/orders/' .
                rawurlencode($order_id) .
                '/download/stl';

        } else {

            $endpoint =
                '/orders/' .
                rawurlencode($order_id) .
                '/download/gcode';
        }

        // Call backend
        $response = wp_remote_get(
            $backend_url . $endpoint,
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Accept' => '*/*',
                ],
                'timeout' => 120,
            ]
        );

        // Connection Error
        if (is_wp_error($response)) {

            wp_die(
                'Download Failed: ' .
                esc_html($response->get_error_message())
            );
        }

        // HTTP Error
        $status = wp_remote_retrieve_response_code($response);

        if ($status !== 200) {

            wp_die(
                'Backend returned HTTP ' .
                esc_html($status)
            );
        }

        // File data
        $headers = wp_remote_retrieve_headers($response);
        $body = wp_remote_retrieve_body($response);

        // Content Type
        if (isset($headers['content-type'])) {
            header(
                'Content-Type: ' .
                $headers['content-type']
            );
        }

        // File Name
        if (isset($headers['content-disposition'])) {
            header(
                'Content-Disposition: ' .
                $headers['content-disposition']
            );
        }

        // File Size
        if (isset($headers['content-length'])) {
            header(
                'Content-Length: ' .
                $headers['content-length']
            );
        }

        header('Cache-Control: no-cache');
        header('Pragma: public');

        echo $body;
        exit;
    }
}