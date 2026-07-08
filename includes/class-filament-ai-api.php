<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_API
{
    /**
     * Login to FastAPI backend and return JWT token.
     */
    public static function get_access_token()
    {
        $backend_url = get_option(
            'filament_ai_backend_url',
            'http://192.168.1.39:8000'
        );

        $username = get_option(
            'filament_ai_backend_username',
            ''
        );

        $password = get_option(
            'filament_ai_backend_password',
            ''
        );

        $response = wp_remote_post(
            $backend_url . '/login',
            [
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
                'body' => wp_json_encode([
                    'username' => $username,
                    'password' => $password,
                ]),
                'timeout' => 30,
            ]
        );

        if (is_wp_error($response)) {
            return new WP_Error(
                'connection_error',
                $response->get_error_message()
            );
        }

        $body = json_decode(
            wp_remote_retrieve_body($response),
            true
        );

        if (
            empty($body) ||
            !isset($body['access_token'])
        ) {
            return new WP_Error(
                'login_failed',
                'Unable to login to backend.'
            );
        }

        return $body['access_token'];
    }
}