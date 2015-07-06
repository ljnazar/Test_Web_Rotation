function displayMap() {
    $('#map').css('display','block');
    iniciar();
}

function iniciar() {
	var mapOptions = {
		center: new google.maps.LatLng(-32.173320, -64.110574),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'),mapOptions);

	//marcador con la ubicación de la empresa
	var place = new google.maps.LatLng(-32.173320, -64.110574);
	var marker = new google.maps.Marker({
        position: place
        , title: 'Oficom SRL'
        , map: map
    , });
}  