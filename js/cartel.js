$(function(){
	//evento al colocar el puntero del raton sobre el cartel
	$('ul.cartel li').hover(function(){
		//obtenemos la instancia del elemento
		var $objItem=$(this);
		//buscamosla imagen y la rotamos 360 grados
		$objItem.find('.logo').stop(true,true).rotate({
			duration: 3000,
			animateTo: 360
		});
		//buscamos la etiqueta y la deslizamos hacia abajo
		$objItem.find('.datos').stop(true,true).slideDown('slow');
		//ejecutamos la función que muestra el mapa (anula el display:none en CSS)
		displayMap();
	}, //evento al retirar el raton del elemento
	function(){
		//obtenemos la instancia del elemento sobre el que esta el raton
		var $objItem=$(this);
		//buscamos la etiqueta y la deslizamos hacia arriba
		$objItem.find('.datos').stop(true,true).slideUp('slow');
		//rotamos la imagen a 0 (cero) grados
		$objItem.find('.logo').stop(true,true).rotate({
			animateTo: 0
		});
		//ocultamos las marcas
		document.getElementById('mark1').style.display="none";
	});
});