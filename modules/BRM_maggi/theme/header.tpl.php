<header class="container-fluid">
  <!--Wrapper login-->
  <div class="login">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-2">
        <h2>Inicio de sesión</h2>
        <form method="" class="form-login">
          <!--Usuario-->
          <div class="form-group">
            <label for="login-usuario">Usuario:</label>
            <input type="text" id="login-usuario" name="login-usuario" class="form-control">
          </div>
          <!--Contraseña-->
          <div class="form-group">
            <label for="login-password">Contraseña: </label>
            <input type="text" id="login-password" name="login-password" class="form-control">
          </div>
          <!--Recordarme-->
          <div class="checkbox">
            <label><input type="checkbox"> Recordar mi cuenta</label>
          </div>
          <input id="login-submit" type="submit" value="Ingresar" class="btn btn-warning">
          <p>
            <a href="#">¿Olvidaste tu contraseña?</a> / Eres nuevo, <a href="registro.html">regístrate</a>
            
            
          </p>
        </form>
        <button type="button" class="btn btn-warning cerrar-login"><span class="glyphicon glyphicon-chevron-up"></span></button>
      </div>
    </div>
  </div>
  <!--/-Wrapper login-->
  <!--Registro y Login-->
  <div class="row">
    <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12 col-lg-offset-9 col-md-offset-9 col-sm-offset-8 text-center">
      <p><a href="#">Registrarse</a> / <a href="#" class="btn-login">Iniciar Sesión</a> <span class="icon icon-profile"></span></p>
    </div>
  </div>
  <!--/-Registro y Login-->
  <!--Menu, logo y Search-->
  <div class="row">
    <!--Logo-->
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
      <h1 class="logo"><img src="<?php print base_path() . path_to_theme(); ?>/images/logo-maggi.svg" alt="MAGGI" title="MAGGI" class="img-responsive"></h1>
    </div>
    <!--/-Logo-->
    <!--Menu y Buscador-->
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-6">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed"><span class="sr-only">Toggle button</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
          </div>
          <div id="navbar" aria-expanded="false" class="navbar-collapse collapse">
            <?php
              $menu = menu_navigation_links('main-menu');
              //var_dump($menu);
              foreach ($menu as $key => $value) {
                $aux = $key;
                if($key = $key.$value["item_attributes"]['class']){
                  $onlyconsonants = limpiarMiga($value["title"]);
                  $key = $key.$value["item_attributes"]['class'];
                  $menu[$aux." "."icon-menu"." ".strtolower($onlyconsonants)]=$value;
                  unset($menu[$aux]);
                }
                
              }
              print theme('links__system_main_menu', array('links' => $menu,'attributes' => array('class' => array('nav navbar-nav navbar-left'))));
            ?>
            <!--Buscador-->
            <div class="navbar-form navbar-right">
              <form class="search-input">
                <input type="text" placeholder="Buscar" class="form-text">
              </form>
            </div>
            <!--/-Buscador-->
          </div>
        </div>
      </nav>
    </div>
    <!--/-Menu y Buscador-->
  </div>
  <!--/-Menu, logo y Search-->
  
  
  
  
  
  
</header>