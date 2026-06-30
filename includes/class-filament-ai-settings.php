<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Settings
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);
    }

    /**
     * Add Filament AI menu
     */
    public function add_settings_page()
    {
        add_menu_page(
            'Filament AI Settings',
            'Filament AI',
            'manage_options',
            'filament-ai-settings',
            [$this, 'settings_page'],
            'dashicons-admin-generic',
            30
        );
    }

    /**
     * Register plugin settings
     */
    public function register_settings()
    {
        // Backend URL
        register_setting(
            'filament_ai_settings_group',
            'filament_ai_backend_url'
        );

        // Backend Username
        register_setting(
            'filament_ai_settings_group',
            'filament_ai_backend_username'
        );

        // Backend Password
        register_setting(
            'filament_ai_settings_group',
            'filament_ai_backend_password'
        );

        add_settings_section(
            'filament_ai_main_section',
            'Backend Settings',
            null,
            'filament-ai-settings'
        );

        // Backend URL
        add_settings_field(
            'filament_ai_backend_url',
            'FastAPI Backend URL',
            [$this, 'backend_url_field'],
            'filament-ai-settings',
            'filament_ai_main_section'
        );

        // Backend Username
        add_settings_field(
            'filament_ai_backend_username',
            'Backend Username',
            [$this, 'backend_username_field'],
            'filament-ai-settings',
            'filament_ai_main_section'
        );

        // Backend Password
        add_settings_field(
            'filament_ai_backend_password',
            'Backend Password',
            [$this, 'backend_password_field'],
            'filament-ai-settings',
            'filament_ai_main_section'
        );
    }

    /**
     * Backend URL Field
     */
    public function backend_url_field()
    {
        $value = get_option('filament_ai_backend_url', '');
        ?>

        <input
            type="text"
            name="filament_ai_backend_url"
            value="<?php echo esc_attr($value); ?>"
            style="width:500px;"
            placeholder="http://127.0.0.1:8000"
        />

        <?php
    }

    /**
     * Backend Username Field
     */
    public function backend_username_field()
    {
        $value = get_option('filament_ai_backend_username', '');
        ?>

        <input
            type="text"
            name="filament_ai_backend_username"
            value="<?php echo esc_attr($value); ?>"
            style="width:500px;"
            placeholder="admin"
        />

        <?php
    }

    /**
     * Backend Password Field
     */
    public function backend_password_field()
    {
        $value = get_option('filament_ai_backend_password', '');
        ?>

        <input
            type="password"
            name="filament_ai_backend_password"
            value="<?php echo esc_attr($value); ?>"
            style="width:500px;"
            placeholder="admin123"
        />

        <?php
    }

    /**
     * Settings Page
     */
    public function settings_page()
    {
        ?>

        <div class="wrap">

            <h1>Filament AI Settings</h1>

            <form method="post" action="options.php">

                <?php
                settings_fields('filament_ai_settings_group');
                do_settings_sections('filament-ai-settings');
                submit_button();
                ?>

            </form>

        </div>

        <?php
    }
}