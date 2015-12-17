<?php
/**
 * @file
 * Adaptivetheme implementation to display a node.
 *
 * Adaptivetheme variables:
 * AT Core sets special time and date variables for use in templates:
 * - $submitted: Submission information created from $name and $date during
 *   adaptivetheme_preprocess_node(), uses the $publication_date variable.
 * - $datetime: datetime stamp formatted correctly to ISO8601.
 * - $publication_date: publication date, formatted with time element and
 *   pubdate attribute.
 * - $datetime_updated: datetime stamp formatted correctly to ISO8601.
 * - $last_update: last updated date/time, formatted with time element and
 *   pubdate attribute.
 * - $custom_date_and_time: date time string used in $last_update.
 * - $header_attributes: attributes such as classes to apply to the header element.
 * - $footer_attributes: attributes such as classes to apply to the footer element.
 * - $links_attributes: attributes such as classes to apply to the nav element.
 * - $is_mobile: Mixed, requires the Mobile Detect or Browscap module to return
 *   TRUE for mobile.  Note that tablets are also considered mobile devices.
 *   Returns NULL if the feature could not be detected.
 * - $is_tablet: Mixed, requires the Mobile Detect to return TRUE for tablets.
 *   Returns NULL if the feature could not be detected.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: An array of node items. Use render($content) to print them all,
 *   or print a subset such as render($content['field_example']). Use
 *   hide($content['field_example']) to temporarily suppress the printing of a
 *   given element.
 * - $user_picture: The node author's picture from user-picture.tpl.php.
 * - $date: Formatted creation date. Preprocess functions can reformat it by
 *   calling format_date() with the desired parameters on the $created variable.
 * - $name: Themed username of node author output from theme_username().
 * - $node_url: Direct url of the current node.
 * - $display_submitted: Whether submission information should be displayed.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - node: The current template type, i.e., "theming hook".
 *   - node-[type]: The current node type. For example, if the node is a
 *     "Blog entry" it would result in "node-blog". Note that the machine
 *     name will often be in a short form of the human readable label.
 *   - node-teaser: Nodes in teaser form.
 *   - node-preview: Nodes in preview mode.
 *   The following are controlled through the node publishing options.
 *   - node-promoted: Nodes promoted to the front page.
 *   - node-sticky: Nodes ordered above other non-sticky nodes in teaser
 *     listings.
 *   - node-unpublished: Unpublished nodes visible only to administrators.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $view_mode: View mode, e.g. 'full', 'teaser'...
 * - $teaser: Flag for the teaser state (shortcut for $view_mode == 'teaser').
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * Field variables: for each field instance attached to the node a corresponding
 * variable is defined, e.g. $node->body becomes $body. When needing to access
 * a field's raw values, developers/themers are strongly encouraged to use these
 * variables. Otherwise they will have to explicitly specify the desired field
 * language, e.g. $node->body['en'], thus overriding any language negotiation
 * rule that was previously applied.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 * @see template_process()
 * @see adaptivetheme_preprocess_node()
 * @see adaptivetheme_process_node()
 */

/**
 * Hide Content and Print it Separately
 *
 * Use the hide() function to hide fields and other content, you can render it
 * later using the render() function. Install the Devel module and use
 * <?php dsm($content); ?> to find variable names to hide() or render().
 */

hide($content['comments']);
hide($content['links']);
?>

<!--Imagen Receta/video-->
<?php if ($content['field_video_url']): ?>
    <section class="container-fluid u-no-border imagen-big"><?php print render($content['field_video_url']);?></section>
<?php else: ?>
  <section class="container-fluid u-no-border imagen-big"><?php print render($content['field_receta_imagen_grande']);?></section>
<?php endif; ?>

<!--/-Imagen Receta/video-->
<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<!--Contenido-->
<!--Contenido-->
<section class="container-fluid receta-contenido">
  <article class="row u-bg-blanco">
    <h1><?php print render($title);?></h1>
    <!--Estrellas y Compartir-->
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-3">
      <div class="estrellas">
        <?php print render($content['field_receta_calificacion']);?>
        <!-- <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span> -->
      </div>

      <p class="extra-tools">
        <div class="botones-redes-wrapper"></div>
        <span class="icon icon-share"></span>
        <?php print render($content['links']['flag']);?>
      </p>
    </div>
    <!--/-Estrellas y Compartir-->
    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
      <div class="datos">
        <div class="box box-nivel"><?php print render($content['field_receta_dificultad']);?></div>
        <div class="box box-tiempo">
          <div class="textos">
            
            <p class="numero"><?php print render($content['field_receta_tiempo']);?>
            </p>
            <p class="help"><?php print render($content['field_receta_tiempo_lista']);?> </p>
          </div>
        </div>
        <div class="box box-porciones">
          <div class="textos">
            <p class="numero"><?php
            print render($content['field_receta_porciones']);
            ?>
            </p>
            <p class="help">Porciones</p>
          </div>
        </div>
        <div class="box box-calorias">
          <div class="textos">
            <p class="numero"><?php print render($content['field_receta_calorias'])?></p>
            <p class="help">Calorías</p>
          </div>
        </div>
      </div>
    </div>
    <!--Ingredientes-->
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 ingredientes">
      <h3>Ingredientes</h3>
      <?php print render($content['field_receta_ingredientes']);?>
      <?php print render($content["field_receta_producto_peque"])?><a role="button" class="enviar">Enviar lista por correo</a>
    </div>
    <!--/-Ingredientes-->
    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 preparacion">
      <!--Preparación-->
      <h3>Preparación</h3>
      <?php print render($content['body'])?>
      <!--/-Preparación-->
      <!--Comentarios-->
      <div class="box-comentarios">
      <!--Validación-->
      <?php if(!$logged_in):?>
        <?php print render($content['links']);?>
      <?php else: ?>
      <p>Comentarios</p>
         <nav<?php 
         $links = render($content['links']['comments']);

         print $links_attributes; ?>><?php print $links; ?>
          <?php print render($title_suffix); ?>
         <?php print render($content['comments']); ?>
       </nav>
      <?php endif; ?>
      </div>
      <!--/-Comentarios     -->
    </div>
  </article>
</section>
<!--/-Contenido
<!--F Contenido-->
 
</article>

<!--<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "Recipe",
  "name": "<?php print render($title);?>",
  "image": "<?php print_r(file_create_url($content['field_receta_imagen_grande']['#object']->field_receta_imagen_grande['und'][0]['uri']));?>",
  "author": {
    "@type":"Person",
    "name":"Maggi"
  },
  "description": "<?php print_r($content['field_receta_descripcion']['#object']->field_receta_descripcion['und'][0]['value']);?>",
  "recipeYield": "<?php print_r($content['field_receta_calorias']['#object']->field_receta_porciones['und'][0]['value']);?> Porciones",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "<?php print_r($content['field_receta_calorias']['#object']->field_receta_calorias['und'][0]['value']);?> cal"
  }
}
</script>-->
