
var url = window.location.pathname,
	screenWidth = $(window).width();


// Funciones y animaciones del sitio web
jQuery(document).ready(function(){


	// ejecutamos solo en el home

	//if ( url == "/" ){		
		jQuery('.block-content').removeClass('content');
		if(jQuery('.productoSazon').length>0){

			$('.productoSazon').each(function(index, value) { 
				var html=jQuery(this).html();
				var impHtml='<div class="content">'+html+'</div>';
				jQuery(this).html(impHtml);
	    	});


			

			///jQuery('.productoSazon').wrapAll('<div class="content" />');
		}
		$('.receta-dia').each(function(index, value) { 
				var html=jQuery(this).html();
				var impHtml='<div class="content">'+html+'</div>';
				jQuery(this).html(impHtml);
				$(this).find("h3").wrapAll('<div class="descripcion" />');
	    
	    });

		//Funcion para mostrar/ocultar cajas filtros

		/*Funcion para mostrar el cargador y los divs correspondientes a las recetas*/
		$(".view-recetario-2do-tiempo .view-content").addClass('hidden');
		$(document).on("change", ".form-select", function () {

			var dominio= window.location.protocol+'//'+window.location.hostname;

			// $("#block-views-recetario-1er-tiempo-block-9").append('<div class="loader"><img src="'+dominio+'/consumidor_nestle_com_co/sites/all/themes/casabienestar/images/icono-recetario.svg" width="60" class="img-responsive"><p>Estamos preparando las recetas</p></div>');
				$("#content .clajsdes").addClass('hidden');
				 $(".valid option", this).addClass("hidden");

			window.setTimeout(function () {
				$(".view-recetario-2do-tiempo .view-content").addClass('show');
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

});