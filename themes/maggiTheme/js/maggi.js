/*App de facebook*/
$(document).ready(function(){
  $('.bxsliderHome').bxSlider();
  $(document).find(".bx-wrapper .image-style-none").removeAttr('height');
  $(document).find("#custom-search-blocks-form-1 .form-type-select").remove();
  $(document).find(".form-item-custom-search-types").remove();

  jQuery('body.extra .recetas>div.row').addClass('u-bg-blanco');

  /*FUncion para prevenir frame jacking*/

/*
Función enviada por nestlé "GLOBE"
Content of bfbs.js
=====================================================*/
var __pcja_style = document.createElement('style');
__pcja_style.type = 'text/css';
__pcja_style.id = 'bfbs_cja';
var __pcja_css = 'html{ display:none !important; }';
if (__pcja_style.styleSheet){
                __pcja_style.styleSheet.cssText = __pcja_css;
	}else{
                __pcja_style.appendChild(document.createTextNode(__pcja_css));
          }

document.getElementsByTagName("head")[0].appendChild(__pcja_style);
if( self === top ){
	                var __bfbs_cja = document.getElementById( 'bfbs_cja' );
	                __bfbs_cja.parentNode.removeChild( document.getElementById( 'bfbs_cja' ) );
	}else{
                top.location = self.location;
          }

/*Función para verificar el dominio XSF*/
try {
if (top.location.hostname != self.location.hostname) throw 1;
} catch (e) {
top.location.href = self.location.href;
}
if (jQuery('form').length){
	 //Ejecutar si existe el elemento
	 jQuery('input,form').attr('autocomplete','off');
	 //console.log('hola form');
	}

});

/* Corazon Favoritos */
$(document).ready(function(){
	$('ul.links li.flag-bookmarks .flag-bookmarks a.flag-action').addClass('glyphicon glyphicon-heart');
	$('ul.links li.flag-bookmarks .flag-bookmarks a.flag-action').addClass('glyphicon glyphicon-heart-empty');
	
	$('ul.links li.flag-bookmarks .flag-bookmarks a.unflag-action').removeClass('glyphicon glyphicon-heart-empty');
	$('ul.links li.flag-bookmarks .flag-bookmarks a.unflag-action').addClass('glyphicon glyphicon-heart');
	$('ul.links li.flag-bookmarks .flag-bookmarks a.unflag-action').empty();
	$('ul.links li.flag-bookmarks .flag-bookmarks a.flag-action').empty();
});

var url = window.location.pathname,
	screenWidth = $(window).width(),
	dominio= window.location.protocol+'//'+window.location.hostname,
	port = "/fbappCasaBienestar",
	oli;
/* FIN Corazon Favoritos */


/*Quitamos altos de los sliders para hacerlos responsive*/



window.fbAsyncInit = function() {
    FB.init({
      appId      : '533460843481140',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


/*Funciones y animaciones del sitio web*/
jQuery(document).ready(function(){


/*Variable para dar el path del stiio*/
	var laBajada=window.location.hash;
	/* JS Label filtros expuestos*/
	//console.log($("div#edit-field-receta-categoria-para-comp-tid-wrapper label").text());
	var paraComp = $("div#edit-field-receta-categoria-para-comp-tid-wrapper label").text();
	$("div#edit-field-receta-categoria-para-comp-tid-wrapper label").css("display","none");
	var paraAllDay = $("div#edit-field-receta-categoria-tid-wrapper label").text();
	$("div#edit-field-receta-categoria-tid-wrapper label").css("display","none");
	var valueParaComp = $("select#edit-field-receta-categoria-para-comp-tid option:first").text();
	var valueParaAllDay = $("select#edit-field-receta-categoria-tid option:first").text();
	//console.log(valueParaComp);
	if(valueParaComp == "- Any -"){
		$("select#edit-field-receta-categoria-para-comp-tid option:first").text(paraComp);
	}
	if(valueParaAllDay == "- Any -"){
		$("select#edit-field-receta-categoria-tid option:first").text(paraAllDay);
	}
	/* FIN JS Label filtros expuestos*/

	/* JS Filtros Livianas y Para niños*/
	$(".views-widget-filter-field_receta_categoria_liviana_tid .views-widget").remove();
	$(".views-widget-filter-field_receta_categoria_para_ni_o_tid_1 .views-widget").remove();
	$("#block-views-vista-filtro-livianas-block").css("display","none");
	$("#block-views-vista-para-ni-os-block").css("display","none");

	$(".views-widget-filter-field_receta_categoria_liviana_tid").click(function(){
		$("#block-views-vista-filtro-livianas-block").css("display","block");
		$("#block-views-vista-para-ni-os-block").css("display","none");
		$(".clajsdes").css("display","none");
		$(".view-recetario-2do-tiempo .view-content").css("display","none");
		
	});

	$(".views-widget-filter-field_receta_categoria_para_ni_o_tid_1").click(function(){
		$("#block-views-vista-para-ni-os-block").css("display","block");
		$("#block-views-vista-filtro-livianas-block").css("display","none");
		$(".clajsdes").css("display","none");
	});
	/* FIN JS Filtros Livianas y Para niños*/

	

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


	    		/*Tabs del Home*/

	    	var videorecetaHome = $("#quicktabs-tab-recomendados_home-0"),
	    		tipsHome = $("#quicktabs-tab-recomendados_home-1"),
	    		temporadaHome = $("#quicktabs-tab-recomendados_home-2"),
	    		contenedorTabs = $("#quicktabs-recomendados_home .quicktabs-tabs"),
	    		videoWrap = $("#quicktabs-container-recomendados_home"),
	    		cuenTab = 0;

	    		//console.log( videorecetaHome );



	    		/*contenedorTabs.html("");*/
	    		contenedorTabs.addClass("slider-botones");
				videorecetaHome.replaceWith($('<h4 class="video-recetas"> <a href="'+videorecetaHome.attr('href')+'"><span class="icon icon-video"></span>' + videorecetaHome.html() + '</a></h4>')); 
				tipsHome.replaceWith($('<h4 class="tips-consejos"> <a href="'+tipsHome.attr('href')+'"><span class="icon icon-tips"></span>' + tipsHome.html() + '</h4>')); 
				temporadaHome.replaceWith($('<h4  class="temporadas"> <a href="'+temporadaHome.attr('href')+'"><span class="icon icon-temporada"></span>' + temporadaHome.html() + '</h4>'));

				contenedorTabs.replaceWith(  $( '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 slider-botones"><div class="content">'+ contenedorTabs.html()+'</div></div>'  ) );

				videoWrap.replaceWith( $( '<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 embed-responsive embed-responsive-16by9 slider-video">' +videoWrap.html()+ '</div>'  ) );

			$("#quicktabs-recomendados_home li a").click(function () {

				cuenTab = 1;

				// console.log(cuenTab );

				$('#quicktabs-recomendados_home li').removeClass("active");


				$(this).parent().addClass("active");

				if (cuenTab == 1){

					window.setTimeout(function () {

						$("#quicktabs-container-recomendados_home").html(" ");	

					},10);


					cuenTab =0;
				};

			});


			if ( laBajada == '#qt-recomendados_home') {

					 $('html,body').animate({
					        scrollTop: $("#quicktabs-recomendados_home").offset().top},
					        'fade');
			}


		/*Funcion para mostrar el cargador y los divs correspondientes a las recetas*/
		var buscaReceta=window.location.search;
		var num = buscaReceta.length;
		if( buscaReceta == 0){
			$(".view-recetario-2do-tiempo .view-content").css("display","none");
		}else{
			$(".clajsdes").css("display","none");
		}
		
		
		$(document).on("change", ".form-select", function () {

			$("#views-exposed-form-recetario-2do-tiempo-block").submit();
			$("#block-views-vista-para-ni-os-block").css("display","none");
  			$("#block-views-vista-filtro-livianas-block").css("display","none");
			// $("#block-views-recetario-1er-tiempo-block-9").append('<div class="loader"><img src="'+dominio+'/consumidor_nestle_com_co/sites/all/themes/casabienestar/images/icono-recetario.svg" width="60" class="img-responsive"><p>Estamos preparando las recetas</p></div>');
				$("#content .clajsdes").addClass('hidden');
				 $(".valid option", this).addClass("hidden");

			window.setTimeout(function () {
				$(".view-recetario-2do-tiempo .view-content").css("display","block");
				$("#edit-reset").addClass('btn btn-primary');
				//$("option", this).removeClass("hidden");
			// console.log("oli");
			},10000);
			
		});


	//Click acordeon recetas
	if ( screenWidth <= 770 &&  url == port+'/' ) {


		var receta = $(".receta-dia");
		//console.log($(document).find(receta));

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
		productosSopas = $('#quicktabs-tabpage-prodcutos_y_promociones-0' ),
		productosBases = $('#quicktabs-tabpage-prodcutos_y_promociones-1' ),
		productosCaldos = $('#quicktabs-tabpage-prodcutos_y_promociones-2' ),
		productosSazonadores = $('#quicktabs-tabpage-prodcutos_y_promociones-3' ),
		urlFiltro = window.location.pathname+window.location.search+window.location.hash;
		
	if ( url == port+"/productos-promociones" || url == port+"/productos-promociones/"){

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

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=0#qt-prodcutos_y_promociones" ){

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

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=1#qt-prodcutos_y_promociones" ){

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

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=2#qt-prodcutos_y_promociones" ){

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

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=3#qt-prodcutos_y_promociones" ){

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

	}
	/*Validamos ancho de ventana para pintar productos sopas*/
	if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=0#qt-prodcutos_y_promociones" && screenWidth  < 768 ){

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

		productosSopas.insertAfter('.activo');

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=1#qt-prodcutos_y_promociones" && screenWidth  < 768  ){

		/*Bases active*/
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
		productosBases.insertAfter('.activo');

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=2#qt-prodcutos_y_promociones" && screenWidth  < 768  ){

		/*Caldos active*/
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
		productosCaldos.insertAfter('.activo');

	}if ( urlFiltro == port+"/productos-promociones?qt-prodcutos_y_promociones=3#qt-prodcutos_y_promociones" && screenWidth  < 768  ){

		/*Sazonadores active*/
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

		productosSazonadores.insertAfter('.activo');
	};



	/*Funcion para quitar class clearfix del contenido*/

	if(jQuery('.page-temporadas').length>0){
		jQuery('div').removeClass('clearfix');	
	}
	/*Fin función*/

	/*Función para agregar type="text/html" a videos para youtube en safari*/

	if(jQuery('.youtube-field-player').length>0){
		
		jQuery('.youtube-field-player').attr('type',"text/html");
	}


});


/*Funciones share*/
$(document).on("ready", function () {

		/*Funcion para compartir en facebook*/

	var btnShare = $(".icon-share"),
		count = 0;

		btnShare.on("click", function () {

			var j = $(this).parent().find("a").attr('href'),
			 	tituloArticle = $(this).parent().find(".dia-receta").text(),
			 	link = dominio,
			 	urlShare = link + j,
			 	oli = urlShare;

			count++;

			if ( count == 1 ){

				/*Generación de los botones para compartir*/

				jQuery(this).prev().show("fade").html('<a href="javascript:;" title="Compartir en Facebook" class="pop share-icon share-icon-facebook" data-share="fb" rel="nofollow"></a><a href="javascript:;" title="Compartir en G+" class="pop share-icon share-icon-googleplus" data-share="g+"></a><a href="javascript:;" title="Compartir en Twitter" class="pop share-icon share-icon-twitter" data-share="tw"></a>');

				jQuery(".pop").click(function () {

					data = jQuery(this).attr('data-share');

					//Funcion compartir facebook
					if(data=='fb'){
						//console.log(oli);
						Share();
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}else if(data=='tw'){
						urlTw="https://twitter.com/share?url="+oli;
						window.open(urlTw,'toolbar=0,resizable=1,status=0,width=640,height=528');
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}else if(data=='g+'){
						urlG="https://plusone.google.com/_/+1/confirm?hl=en&url="+oli;
						window.open(urlG,'toolbar=0,resizable=1,status=0,width=640,height=528');
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}
				});

			//Click sobre los botones de redes sociales
		  	
			//count++;
			//console.log(count);
			return false;

			}if( count == 2 ){


				$(".botones-redes-wrapper").hide("fade");


				jQuery(this).prev().show("fade").html('<a href="javascript:;" title="Compartir en Facebook" class="pop share-icon share-icon-facebook" data-share="fb" rel="nofollow"></a><a href="javascript:;" title="Compartir en G+" class="pop share-icon share-icon-googleplus" data-share="g+"></a><a href="javascript:;" title="Compartir en Twitter" class="pop share-icon share-icon-twitter" data-share="tw"></a>');

				jQuery(".pop").click(function () {

					data = jQuery(this).attr('data-share');

					//Funcion compartir facebook
					if(data=='fb'){
						//console.log(oli);
						Share();
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}else if(data=='tw'){
						urlTw="https://twitter.com/share?url="+oli;
						window.open(urlTw,'toolbar=0,resizable=1,status=0,width=640,height=528');
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}else if(data=='g+'){
						urlG="https://plusone.google.com/_/+1/confirm?hl=en&url="+oli;
						window.open(urlG,'toolbar=0,resizable=1,status=0,width=640,height=528');
						$('.botones-redes-wrapper').hide('fade');
						$('.botones-redes-wrapper').html("");
						count=0;
						return false;
					}
				});

				count = 1;
				//console.log(count);
				return false;

			}else{
					count=2;
				};

		});

	jQuery(".pop").on("click", function () {
		count =0;
		$('.botones-redes-wrapper').hide('fade');
		$('.botones-redes-wrapper').html("");
	});



	//var oli;
	
		

		


	
});

/*Funcion Share para fb*/
		function Share(url) {
			//console.log(url+oli);
			  FB.ui({
			  method: 'share_open_graph',
			  action_type: 'og:share',
			  action_properties: JSON.stringify({
			      object: url,
			  })
			}, function(response){});
		};


/*Validación de formularios*/

jQuery(document).ready(function(){

var currentURL = window.location.href;
	 	var hs = currentURL.slice(-8);
	 	//console.log(hs);
if(jQuery('form').length>0){
	jQuery('form').each(function(){
	    jQuery(this).validate({
	
	    	errorClass: "text-danger",
		errorPlacement: function(error, element) {
	    	error.insertAfter(element);
	    	element.focus();
			},
				rules: {
					name: {
						required: true,
					},
	
					pass: {
						required: true,
					},
					mail : {
						required: true,
						email: true
					}
	
				},
				messages: {
					name: {
						required: 'El campo no debe estar vacío',
					},
					pass: {
						required: 'El campo no debe estar vacío',
					},
					mail : {
						required: 'El campo no debe estar vacío',
						email: 'Ingrese un formato de e-mail válido'
						
					}
				}
	
	    });
	
	   
	});
}
 jQuery("#edit-custom-search-blocks-form-1--2").rules("add", {
         required:true,
         messages: {
                required: "Ingrese un valor para su búsqueda"
         }
 });



if(hs=='register'){

/*se agrega un metodo de validacion llamdo string; se encarga de
	* validar que las cadenas de caracteres ingresadas no contengan
	* caracteres especiales.
	*/
	jQuery.validator.addMethod("string", function(value, element)
    {
        return this.optional(element) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(value);
    });
 jQuery("#edit-field-nombre-s-user-und-0-value").rules("add", {
         required:true,
         string: true,
         messages: {
                required: "El campo no debe estar vacio",
                string: "El nombre no debe contener caracteres numéricos o especiales",
         }
 });
 jQuery("#edit-field-apellido-s-user-und-0-value").rules("add", {
         required:true,
         string: true,
         messages: {
                required: "El campo no debe estar vacio",
                string: "El nombre no debe contener caracteres numéricos o especiales",
         }
 });

}

/*Banea palabras*/

$.getJSON( dominio+port+'/lalistabanea', function( data ) {
  
  baneoesto = data;
		
}); 
	jQuery('.password-field').on('blur',function(){
		
		var pass=jQuery('input[name="pass[pass1]"]').val();
		
		if(jQuery.inArray(pass,baneoesto) !== -1) {
			
		   	jQuery('input[name="pass[pass1]"]').val('');
		    jQuery('.form-type-password').append('<label class="error">La contraseña no es válida</label>');

		}

	}); 

	/*Compartir internas*/
	var countShare=0;
	jQuery('#compartirN').on('click',function(){
		countShare++;
		console.log(countShare);
		if(countShare==1){
			$('.botones-redes-wrapper').show('fade').share({
        networks: ['facebook','googleplus','twitter'],
    	});
			countShare++;
			console.log(countShare);
		}else{
			countShare=2;
		}
		console.log(countShare);

		jQuery(".pop").on("click", function () {
			countShare =0;
			$('.botones-redes-wrapper').hide('fade');
			$('.botones-redes-wrapper').html("");
		});

	});

	/*Fin compartir*/
});

//funcion enviar por lista de correo//
var ingredientes = $('.field-collection-container  .field-name-field-receta-ingredientes');


var listaIngr = [];


 function armarreglo () {
 	
 	$(ingredientes).each(function() {

 		var adentro = $(this).text();

 		listaIngr.push( adentro);

 		
 	});

 };

armarreglo();

var tituloReceta = $('h1').text();

var enviarLista = listaIngr.toString().replace(/,/g,'%0D%0A');

// console.log(perra);

// $('.comment_forbidden').html( '<ul><li>'+ perra +'</ul>');

var mensaje = 'Para preparar ' +  tituloReceta + ' debes comprar los siguientes ingredientes%0D%0A' + enviarLista; 



 var sendGmail = function(opts){
		   			 var recipient = '',
    					 subject   = 'Lista de ingredientes para '+tituloReceta+ 'de MAGGI' ,
     					message  = mensaje;



						gmail= 'https://mail.google.com/mail/?view=cm&fs=1'+
               			 '&to=' + recipient +
               			 '&su=' + subject +
                			'&body=' + message + 
                			'&ui=1';
};


$('.enviar').on('click', function(){

	sendGmail();
	window.open(gmail,'toolbar=0,resizable=1,status=0,width=640,height=528');

});
