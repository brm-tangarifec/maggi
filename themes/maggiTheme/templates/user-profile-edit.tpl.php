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

/*echo '<pre>';
//print_r($form);
print render($form['account']['pass']);
echo '</pre>';*/
?>

<div class="row">


  <h1 class="text-center">Registro</h1>
 
  <!--Imagen de perfil-->
  <div class="col-lg-4 col-md-4 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-4">
    
    <?php
      print render($form['picture']);
    ?>

  </div>
  <!--/-Imagen de perfil-->
  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
    
    <?php
      print render($form['field_nombre_s_user']);
    ?>

  </div>

  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
    <?php
      print render($form['field_apellido_s_user']);
    ?>

  </div>
  <!--/-Imagen de perfil-->
</div>


<div class="row">
  <!--Nombre Usuario-->
  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
    <?php
      print render($form['account']['name']);
    ?>

  </div>

  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
    <?php
      print render($form['account']['mail']);
    ?> 
  </div>
  <!--/-Nombre Usuario-->
</div>

<div class="row">


<div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
    <?php
      print render($form['field_tipo_de_documento_user']);
    ?>

  </div>

   <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">

     <?php
      print render($form['field_numero_de_documento_user']);
    ?>  
    

   </div>
</div>

<div class="row">
    <!--Nombres-->
  
  <!--/-Nombres-->
  <!--Apellidos-->
  

   <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">

     <?php
      print render($form['field_g_nero_user']);
    ?>
    

   </div>


   <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">

    <?php
      print render($form['field_fecha_de_nacimiento_user']);
    ?>
   </div>

  
</div>

<div class="row">

<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 col-lg-offset-1 col-md-offset-1 col-xs-offset-1">
     <?php
    print render($form['field_departamento']);
    ?>
  </div>
</div>

<div class="row">

  <!--Teléfono-->
  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
    <?php
      print render($form['field_como_te_enteraste_user']);
    ?>

  </div>
  <!--/-Teléfono-->
</div>
<div class="row">

  <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
    
    <?php
     /* print render($form['field_como_te_enteraste_user']);*/
    ?>

  </div>


   <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">

    <?php
      /*print_r($form['account']);*/
       print render($form['account']['pass']);
    ?>
    
    
    
  </div>

</div>
  <!--/-Ciudad-->


<div class="row">
  <!--Deseo Recibir Info-->

  <!--/-Deseo Recibir Info-->
  <!--Como te enteraste-->
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
    
    <?php
      print render($form['field_deseo_recibir_informacion']); 
    ?>
    
  </div>
  <!--/-Como te enteraste-->
  <!--Autorizo uso de datos-->
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
     <?php
      print render($form['field_ace_y_condi']); 
     ?>

  </div>
  <!--/-Autorizo uso de datos-->

</div>

  <!--/-Final selección pilares-->
<div class="row">
  <!--Submit-->
  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-3">
    <?php print drupal_render_children($form); ?>
    
  </div>
  
  <!--/-Submit-->
  
</div>