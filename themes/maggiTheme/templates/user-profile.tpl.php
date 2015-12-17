<?php

/**
 * @file
 * Default theme implementation to present all user profile data.
 *
 * This template is used when viewing a registered member's profile page,
 * e.g., example.com/user/123. 123 being the users ID.
 *
 * Use render($user_profile) to print all profile items, or print a subset
 * such as render($user_profile['user_picture']). Always call
 * render($user_profile) at the end in order to print all remaining items. If
 * the item is a category, it will contain all its profile items. By default,
 * $user_profile['summary'] is provided, which contains data on the user's
 * history. Other data can be included by modules. $user_profile['user_picture']
 * is available for showing the account picture.
 *
 * Available variables:
 *   - $user_profile: An array of profile items. Use render() to print them.
 *   - Field variables: for each field instance attached to the user a
 *     corresponding variable is defined; e.g., $account->field_example has a
 *     variable $field_example defined. When needing to access a field's raw
 *     values, developers/themers are strongly encouraged to use these
 *     variables. Otherwise they will have to explicitly specify the desired
 *     field language, e.g. $account->field_example['en'], thus overriding any
 *     language negotiation rule that was previously applied.
 *
 * @see user-profile-category.tpl.php
 *   Where the html is handled for the group.
 * @see user-profile-item.tpl.php
 *   Where the html is handled for each item in the group.
 * @see template_preprocess_user_profile()
 *
 * @ingroup themeable
 */

//print_r($user_profile);
$fotoPerfil=$user_profile['field_nombre_s_user']['#object']->picture->uri;
?>


 <div class="row">
  

    <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12">


      <figure class="img-perfil img-circle center-block">
        
          <img src="<?php print file_create_url($fotoPerfil)?>" >
        
      </figure>

   </div>

    <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12">
    <p class="nombre"> <?php print $user_profile['field_nombre_s_user'][0]['#markup']." ".$user_profile['field_apellido_s_user'][0]['#markup']; ?></p>
    <p><strong>Email</strong> <?php print $user_profile['field_nombre_s_user']['#object']->mail; ?>
    </p>
    <p><strong>Teléfono </strong><?php print $user_profile['field_telefono_user'][0]['#markup']; ?></p>
    <!--<p><strong>Ciudad</strong>  <?php print $perfil['field_ciudades']['#object']['field_ciudades']['und'][0]['taxonomy_term']['name'] ; ?></p-->
    <p><strong>Documento</strong>    <?php print $user_profile['field_tipo_de_documento_user'][0]['#markup']; ?> <?php print $user_profile['field_numero_de_documento_user'][0]['#markup']; ?> </p>
    <p><strong>Fecha de nacimiento </strong><?php print $user_profile['field_fecha_de_nacimiento_user'][0]['#markup']; ?></p>
   </div>
 </div>



 
        
          
       </div>
