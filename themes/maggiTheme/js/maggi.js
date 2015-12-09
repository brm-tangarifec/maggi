
var url = window.location.pathname;


// Funciones y animaciones del sitio web
jQuery(document).ready(function(){


	// ejecutamos solo en el home

	if ( url == "/" ){		
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
	    
	    });

	    $(".dia").each(function(index, value) { 

				var htmldia=jQuery(this).html();

				// var impHtmldia='<div class="descripcion">'+htmldia+'</div>';
				// jQuery(this).html(impHtmldia);

				$(this).html(htmldia).wrap('<div class="descripcion" />')
	    
	    });


	};

});