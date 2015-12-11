
var url = window.location.pathname,
	screenWidth = $(window).width(),
	dominio= window.location.protocol+'//'+window.location.hostname;


/*Funciones y animaciones del sitio web*/
jQuery(document).ready(function(){

	/*slide de login
	 Abrimos el panel de login*/
	$(".btn-login").on("click", function () {

		$(".login").addClass('animated slideInDown').slideDown();
		// $(".login").slideDown();
		
	});

	/*Cerramos el panel de login*/

	$(".cerrar-login").on("click", function () {
		 $(".login").removeClass('animated slideInDown').slideUp();
	});

		jQuery('.block-content').removeClass('content');
		if(jQuery('.productoSazon').length>0){

			$('.productoSazon').each(function(index, value) { 
				var html=jQuery(this).html();
				var impHtml='<div class="content">'+html+'</div>';
				jQuery(this).html(impHtml);
	    	});
		}
		$('.receta-dia').each(function(index, value) { 
				var html=jQuery(this).html();
				var impHtml='<div class="content">'+html+'</div>';
				jQuery(this).html(impHtml);
				$(this).find("h3").wrapAll('<div class="descripcion" />');
	    
	    });


		/*Funcion para mostrar el cargador y los divs correspondientes a las recetas*/
		console.log(url);
		$(".view-recetario-2do-tiempo .view-content").addClass('hidden');
		$(document).on("change", ".form-select", function () {


			// $("#block-views-recetario-1er-tiempo-block-9").append('<div class="loader"><img src="'+dominio+'/consumidor_nestle_com_co/sites/all/themes/casabienestar/images/icono-recetario.svg" width="60" class="img-responsive"><p>Estamos preparando las recetas</p></div>');
				$("#content .clajsdes").addClass('hidden');
				 $(".valid option", this).addClass("hidden");

			window.setTimeout(function () {
				$(".view-recetario-2do-tiempo .view-content").removeClass("hidden");
				$("#edit-reset").addClass('btn btn-primary');
				 $("option", this).removeClass("hidden");
			// console.log("oli");
			},10000);
			
		});


	//Click acordeon recetas
	if ( screenWidth <= 770 ) {

		var receta = $(".receta-dia");

		$(".receta-dia").on('click', function() {

			$(document).find(receta).removeClass("receta-activa");

			$(this).addClass("receta-activa");


		});


	};

	$('.block-brm-maggi .cont-secun .cont-secun-item').click(function(){
		var idvideoPrin = $('.block-brm-maggi .cont-princ').attr('idvideo');
		var titlePrin = $('.block-brm-maggi .cont-princ').attr('title');
		var idvideosecun = $(this).attr('idvideosecun');
		var titleSecun = $(this).attr('title');

		$('.block-brm-maggi .cont-princ').attr("title",titleSecun);
		$('.block-brm-maggi .cont-princ').attr("idvideo",idvideosecun);
		$('.block-brm-maggi .cont-princ .embed-responsive iframe').attr("src", "https://www.youtube.com/embed/"+idvideosecun+"?rel=0&autoplay=0");
		
		$(this).attr("title",titlePrin);
		$(this).attr("idvideosecun",idvideoPrin);
		$('img', this).attr("src", "http://img.youtube.com/vi/"+idvideoPrin+"/0.jpg");
		$('h3', this).text(titlePrin);
	});


	//estilos para selector de productos//
	var sopas = $("#quicktabs-tab-prodcutos_y_promociones-0").attr('href'),
		bases = $("#quicktabs-tab-prodcutos_y_promociones-1").attr('href'),
		caldos = $("#quicktabs-tab-prodcutos_y_promociones-2").attr('href'),
		sazonadores = $("#quicktabs-tab-prodcutos_y_promociones-3").attr('href'),
		categoriaProd = $(".item-list-q"),
		urlFiltro = window.location.pathname+window.location.search+window.location.hash,
		port = ":"+window.location.port;

	if ( url == "/productos-promociones" ){

			categoriaProd.addClass('productos').html("");

			categoriaProd.html('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'+
				sopas+'" class="producto-categoria">Sopas y Cremas</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/cremas-sopas.jpg" alt="Sopas y Cremas" title="Sopas y Cremas"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+bases+'" class="producto-categoria">Bases</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/bases.jpg" alt="Bases" title="Bases"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+caldos+'" class="producto-categoria">Caldos</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/caldos.jpg" alt="Caldos" title="Caldos"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+sazonadores+'" class="producto-categoria">Sazonadores</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/sazonadores.jpg" alt="Sazonadores" title="Sazonadores"></div></div>');

	}if ( urlFiltro == "/productos-promociones?qt-prodcutos_y_promociones=0#qt-prodcutos_y_promociones" ){

			categoriaProd.addClass('productos').html("");

			categoriaProd.html('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto activo"><div class="content"><a href="'+
				sopas+'" class="producto-categoria">Sopas y Cremas</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/cremas-sopas.jpg" alt="Sopas y Cremas" title="Sopas y Cremas"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+bases+'" class="producto-categoria">Bases</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/bases.jpg" alt="Bases" title="Bases"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+caldos+'" class="producto-categoria">Caldos</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/caldos.jpg" alt="Caldos" title="Caldos"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+sazonadores+'" class="producto-categoria">Sazonadores</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/sazonadores.jpg" alt="Sazonadores" title="Sazonadores"></div></div>');

	}if ( urlFiltro == "/productos-promociones?qt-prodcutos_y_promociones=1#qt-prodcutos_y_promociones" ){

			categoriaProd.addClass('productos').html("");

			categoriaProd.html('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'+
				sopas+'" class="producto-categoria">Sopas y Cremas</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/cremas-sopas.jpg" alt="Sopas y Cremas" title="Sopas y Cremas"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto activo"><div class="content"><a href="'
				+bases+'" class="producto-categoria">Bases</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/bases.jpg" alt="Bases" title="Bases"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+caldos+'" class="producto-categoria">Caldos</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/caldos.jpg" alt="Caldos" title="Caldos"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+sazonadores+'" class="producto-categoria">Sazonadores</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/sazonadores.jpg" alt="Sazonadores" title="Sazonadores"></div></div>');

	}if ( urlFiltro == "/productos-promociones?qt-prodcutos_y_promociones=2#qt-prodcutos_y_promociones" ){

			categoriaProd.addClass('productos').html("");

			categoriaProd.html('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'+
				sopas+'" class="producto-categoria">Sopas y Cremas</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/cremas-sopas.jpg" alt="Sopas y Cremas" title="Sopas y Cremas"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'
				+bases+'" class="producto-categoria">Bases</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/bases.jpg" alt="Bases" title="Bases"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto activo"><div class="content"><a href="'
				+caldos+'" class="producto-categoria">Caldos</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/caldos.jpg" alt="Caldos" title="Caldos"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto"><div class="content"><a href="'
				+sazonadores+'" class="producto-categoria">Sazonadores</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/sazonadores.jpg" alt="Sazonadores" title="Sazonadores"></div></div>');

	}if ( urlFiltro == "/productos-promociones?qt-prodcutos_y_promociones=3#qt-prodcutos_y_promociones" ){

			categoriaProd.addClass('productos').html("");

			categoriaProd.html('<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'+
				sopas+'" class="producto-categoria">Sopas y Cremas</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/cremas-sopas.jpg" alt="Sopas y Cremas" title="Sopas y Cremas"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'
				+bases+'" class="producto-categoria">Bases</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/bases.jpg" alt="Bases" title="Bases"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto "><div class="content"><a href="'
				+caldos+'" class="producto-categoria">Caldos</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/caldos.jpg" alt="Caldos" title="Caldos"></div></div><div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 producto activo"><div class="content"><a href="'
				+sazonadores+'" class="producto-categoria">Sazonadores</a><img src="'
				+dominio+port+'/sites/all/themes/maggiTheme/files/images/productos/sazonadores.jpg" alt="Sazonadores" title="Sazonadores"></div></div>');

	};


});