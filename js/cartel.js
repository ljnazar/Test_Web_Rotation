var valor=1;

$(function(){
	//evento al colocar el puntero del raton sobre el cartel
	$('#cartel').hover(function(){
		if (valor===1){
			//buscamosla imagen y la rotamos 360 grados
			$('#logo').stop(true,true).rotate({
				duration: 3000,
				animateTo: 360
			});
			//buscamos la etiqueta y la deslizamos hacia abajo
			$('#datos').stop(true,true).slideDown('slow');
			//ejecutamos la función que muestra el mapa (anula el display:none en CSS)
			displayMap();
		}
	}, //evento al retirar el raton del elemento
	function(){
		if (valor===1){
			//buscamos la etiqueta y la deslizamos hacia arriba
			$('#datos').stop(true,true).slideUp('slow');
			//rotamos la imagen a 0 (cero) grados
			$('#logo').stop(true,true).rotate({
				animateTo: 0
			});
		}
	});
});