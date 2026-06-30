<?php

if (!defined('ABSPATH')) {
    exit;
}

class Filament_AI_Pricing
{
    public function __construct()
    {
        add_action('admin_menu', [$this, 'add_pricing_page']);
        add_action('admin_init', [$this, 'register_settings']);
    }

    public function add_pricing_page()
    {
        add_submenu_page(
            'filament-ai-settings',
            'Pricing',
            'Pricing',
            'manage_options',
            'filament-ai-pricing',
            [$this, 'render_pricing_page']
        );
    }

    public function register_settings()
    {
        register_setting(
            'filament_ai_pricing_group',
            'filament_ai_electricity_cost'
        );

        register_setting(
            'filament_ai_pricing_group',
            'filament_ai_labour_cost'
        );

        register_setting(
            'filament_ai_pricing_group',
            'filament_ai_profit_margin'
        );

        register_setting(
            'filament_ai_pricing_group',
            'filament_ai_tax'
        );
    }

    public function render_pricing_page()
    {
        ?>
        <div class="wrap">

            <h1>Pricing Settings</h1>

            <form method="post" action="options.php">

                <?php settings_fields('filament_ai_pricing_group'); ?>

                <table class="form-table">

                    <tr>
                        <th>Electricity Cost (₹/kWh)</th>
                        <td>
                            <input
                                type="number"
                                step="0.01"
                                name="filament_ai_electricity_cost"
                                value="<?php echo esc_attr(get_option('filament_ai_electricity_cost', 8)); ?>"
                            >
                        </td>
                    </tr>

                    <tr>
                        <th>Labour Cost (₹/Hour)</th>
                        <td>
                            <input
                                type="number"
                                step="0.01"
                                name="filament_ai_labour_cost"
                                value="<?php echo esc_attr(get_option('filament_ai_labour_cost', 50)); ?>"
                            >
                        </td>
                    </tr>

                    <tr>
                        <th>Profit Margin (%)</th>
                        <td>
                            <input
                                type="number"
                                step="0.01"
                                name="filament_ai_profit_margin"
                                value="<?php echo esc_attr(get_option('filament_ai_profit_margin', 20)); ?>"
                            >
                        </td>
                    </tr>

                    <tr>
                        <th>Tax (%)</th>
                        <td>
                            <input
                                type="number"
                                step="0.01"
                                name="filament_ai_tax"
                                value="<?php echo esc_attr(get_option('filament_ai_tax', 18)); ?>"
                            >
                        </td>
                    </tr>

                </table>

                <?php submit_button('Save Changes'); ?>

            </form>

        </div>
        <?php
    }
}