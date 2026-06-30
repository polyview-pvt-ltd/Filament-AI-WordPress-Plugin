<?php
if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body style="margin:0;padding:0;">
    <?php echo do_shortcode('[filament_ai]'); ?>
    <?php wp_footer(); ?>
</body>
</html>