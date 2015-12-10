<?php

/**
 * @file
 * Process theme data.
 *
 * Use this file to run your theme specific implimentations of theme functions,
 * such preprocess, process, alters, and theme function overrides.
 *
 * Preprocess and process functions are used to modify or create variables for
 * templates and theme functions. They are a common theming tool in Drupal, often
 * used as an alternative to directly editing or adding code to templates. Its
 * worth spending some time to learn more about these functions - they are a
 * powerful way to easily modify the output of any template variable.
 *
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "maggiTheme" to match
 *    your subthemes name, e.g. if your theme name is "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "maggiTheme".
 * 2. Uncomment the required function to use.
 */


/**
 * Preprocess variables for the html template.
 */
/* -- Delete this line to enable.
function maggiTheme_preprocess_html(&$vars) {
  global $theme_key;

  // Two examples of adding custom classes to the body.

  // Add a body class for the active theme name.
  // $vars['classes_array'][] = drupal_html_class($theme_key);

  // Browser/platform sniff - adds body classes such as ipad, webkit, chrome etc.
  // $vars['classes_array'][] = css_browser_selector();

}
// */
/*Quitar css propio de drupal*/
function maggiTheme_css_alter(&$css) {
  $exclude = array(
    'misc/vertical-tabs.css' => FALSE,
    'modules/aggregator/aggregator.css' => FALSE,
    'modules/block/block.css' => FALSE,
    'modules/book/book.css' => FALSE,
    'modules/comment/comment.css' => FALSE,
    'modules/dblog/dblog.css' => FALSE,
    'modules/file/file.css' => FALSE,
    'modules/filter/filter.css' => FALSE,
    'modules/forum/forum.css' => FALSE,
    'modules/help/help.css' => FALSE,
    'modules/node/node.css' => FALSE,
    'modules/openid/openid.css' => FALSE,
    'modules/poll/poll.css' => FALSE,
    'modules/profile/profile.css' => FALSE,
    'modules/search/search.css' => FALSE,
    'modules/statistics/statistics.css' => FALSE,
    'modules/syslog/syslog.css' => FALSE,
    'modules/system/admin.css' => FALSE,
    'modules/system/maintenance.css' => FALSE,
    'modules/system/system.css' => FALSE,
    'modules/system/system.admin.css' => FALSE,
    'modules/system/system.base.css' => FALSE,
    'modules/system/system.maintenance.css' => FALSE,
    'modules/system/system.menus.css' => FALSE,
    'modules/system/system.messages.css' => FALSE,
    'modules/system/system.theme.css' => FALSE,
    'modules/taxonomy/taxonomy.css' => FALSE,
    'modules/tracker/tracker.css' => FALSE,
    'modules/update/update.css' => FALSE,
    'modules/user/user.css' => FALSE,
     // Remove contrib module CSS
  drupal_get_path('module', 'views') . '/css/views.css' => FALSE,

  );
  $css = array_diff_key($css, $exclude);
}

/**
 * Process variables for the html template.
 */
/* -- Delete this line if you want to use this function
function maggiTheme_process_html(&$vars) {
}
// */


/**
 * Override or insert variables for the page templates.
 */
/* -- Delete this line if you want to use these functions*/
function maggiTheme_preprocess_page(&$vars) {
	/*Incluir js en drupal*/
	drupal_add_css(path_to_theme() . '/css/maggi.min.css',  array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_js(path_to_theme() . '/js/libs.maggi.js',  array( 'scope' => 'header', 'weight' => -20 , 'group' => JS_LIBRARY, 'preprocess' => FALSE));
  drupal_add_css(path_to_theme() . '/js/bxslider/jquery.bxslider.css',  array('group' => CSS_DEFAULT, 'every_page' => TRUE));
  drupal_add_js(path_to_theme() . '/js/bxslider/jquery.bxslider.min.js',  array( 'scope' => 'header', 'weight' => -20 , 'group' => JS_LIBRARY, 'preprocess' => FALSE));
  
	drupal_add_js(path_to_theme() . '/js/maggi.js',  array( 'scope' => 'header', 'weight' => -20 , 'group' => JS_LIBRARY, 'preprocess' => FALSE));
  if (!empty($vars['node']) && !empty($vars['node']->type)) {
    $vars['theme_hook_suggestions'][] = 'page__node__' . $vars['node']->type;
  }
	
}
function maggiTheme_process_page(&$vars) {
}
// */



/**
 * Override or insert variables into the node templates.
 */
/* -- Delete this line if you want to use these functions
function maggiTheme_preprocess_node(&$vars) {
}
function maggiTheme_process_node(&$vars) {
}
// */


/**
 * Override or insert variables into the comment templates.
 */
/* -- Delete this line if you want to use these functions
function maggiTheme_preprocess_comment(&$vars) {
}
function maggiTheme_process_comment(&$vars) {
}
// */


/**
 * Override or insert variables into the block templates.
 */
/* -- Delete this line if you want to use these functions
function maggiTheme_preprocess_block(&$vars) {
}
function maggiTheme_process_block(&$vars) {
}
// */
