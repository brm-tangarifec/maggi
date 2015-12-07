
//Funciones y animaciones del sitio web
$(document).on("ready", function () {
	//Sticky menu
	 $("#menu").affix({
			offset: { 
					top: 100 
		}
	});

	//Animacion de entrada para fijar menu

	$("#menu").on('affixed.bs.affix', function () {
			
			$(this).addClass('animated fadeInDown');


	});

	//removemos animacion 
	$("#menu").on("affixed-top.bs.affix", function () {
			$(this).removeClass('animated fadeInDown');
	});

	//slide de login
	// Abrimos el panel de login
	$(".btn-login").on("click", function () {

		$(".login").addClass('animated slideInDown').slideDown();
		// $(".login").slideDown();
		
	});

	//Cerramos el panel de login

	$(".cerrar-login").on("click", function () {
		 $(".login").removeClass('animated slideInDown').slideUp();
	});

		//Fuciones de scroll
		$(window).scroll(function() {

		//Ocultamos boton volver arriba
		 if (  $(window).scrollTop() >= 980 ) {

		 	$(".up").removeClass('animated fadeInUp');
		 }


		//Mostramos boton volver arriba
		 if ( $(window).scrollTop() > 1500 && !$(".up").hasClass('animated')  ) {

		 		$(".up").addClass('animated fadeInUp');		


		 }

		});

});


