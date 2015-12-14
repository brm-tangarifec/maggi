/*App de facebook*/

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



var url = window.location.pathname,
	screenWidth = $(window).width(),
	dominio= window.location.protocol+'//'+window.location.hostname;


/*Funciones y animaciones del sitio web*/
jQuery(document).ready(function(){

	/* JS Label filtros expuestos*/
	console.log($("div#edit-field-receta-categoria-para-comp-tid-wrapper label").text());
	var paraComp = $("div#edit-field-receta-categoria-para-comp-tid-wrapper label").text();
	var paraAllDay = $("div#edit-field-receta-categoria-tid-wrapper label").text();
	var valueParaComp = $("select#edit-field-receta-categoria-para-comp-tid option:first").text();
	var valueParaAllDay = $("select#edit-field-receta-categoria-tid option:first").text();
	console.log(valueParaComp);
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


/*Funciones share*/
$(document).on("ready", function () {

	var btnShare = $(".block-content .icon-share"),
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
			console.log(count);
			return false;

			}if( count == 2 ){


				$(".botones-redes-wrapper").hide("fade");


				jQuery(this).prev().show("fade").html('<a href="javascript:;" title="Compartir en Facebook" class="pop share-icon share-icon-facebook" data-share="fb" rel="nofollow"></a><a href="javascript:;" title="Compartir en G+" class="pop share-icon share-icon-googleplus" data-share="g+"></a><a href="javascript:;" title="Compartir en Twitter" class="pop share-icon share-icon-twitter" data-share="tw"></a>');

				jQuery(".pop").click(function () {

					data = jQuery(this).attr('data-share');

					//Funcion compartir facebook
					if(data=='fb'){
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
				console.log(count);
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



		
	/*Funcion para compartir en facebook*/
	var oli;
	function Share(url) {
	  FB.ui({
	  method: 'share_open_graph',
	  action_type: 'og:share',
	  action_properties: JSON.stringify({
	      object: oli,
	  })
	}, function(response){});
	};

	
});
