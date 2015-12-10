
<section class="container-fluid recetas recetas-relacionadas">
  <article class="row">
    <h2 class="titular-bg">
      <span class="icon icon-recetas"></span> Recetas con Base para Salsa Bechamel MAGGI®
      
    </h2>

  <?php foreach ($variables['nodx'] as $key => $value) : ?>

    <!--Receta martes-->
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 receta-dia-producto">
      <div class="content">
        <figure class="img-receta"><a href="#" class="descripcion">
            <h3><?php print_r($value->field_receta_dia_semana["und"]['0']['value']);?></h3>
            <p><?php print_r($value->title);?></p></a><a href="#"><img src="<?php print_r(file_create_url($value->field_receta_imagen_pequena['und'][0]['uri']))?>" alt="<?php print_r($value->field_receta_imagen_pequena['und'][0][alt])?>" title="<?php print_r($value->field_receta_imagen_pequena['und'][0]['title'])?>"></a></figure>
        <p class="extra-tools">
          <span class="icon icon-share"></span>
          <span class="icon icon-timer"></span> <span class="time"><?php print_r($value->field_receta_tiempo["und"]['0']['value'].' '.$value->field_receta_tiempo_lista["und"]['0']['value']);?></span>
          <div class="estrellas">
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star-empty"></span>
            <span class="glyphicon glyphicon-star-empty"></span>
          
          </div>
        </p>
      </div>
    </div>
    <?php endforeach; ?>
    <!--Receta martes-->

    </div>
  </article>
</section>