
var url = window.location.pathname;
	screenWidth = $(window).width();
	var dominio= window.location.protocol+'//'+window.location.hostname;


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
		$('.block-brm-maggi .cont-princ .embed-responsive iframe').attr("src", "https://www.youtube.com/embed/"+idvideosecun+"?rel=0&autoplay=0")embed-responsive
	});

});