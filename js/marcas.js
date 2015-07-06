$(function(){
    //evento al colocar el puntero del raton sobre el texto 1
    $('#texto1').hover(function(){
    	$('#texto1').attr('src','img/Texto1_activado.png');
        $('#mark1').css('display','block');
        $('#mark2').css('display','block');
    }, //evento al retirar el raton del texto 1
    function(){
    	$('#texto1').attr('src', 'img/Texto1.png');
        $('#mark1').css('display','none');
        $('#mark2').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 2
    $('#texto4').hover(function(){
    	$('#texto2').attr('src','img/Texto2_activado.png');
    	$('#mark3').css('display','block');
    }, //evento al retirar el raton del texto 2
    function(){
    	$('#texto2').attr('src','img/Texto2.png');
        $('#mark3').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 3
    $('#texto3').hover(function(){
    	$('#texto3').attr('src','img/Texto3_activado.png');
    	$('#mark4').css('display','block');
    	$('#mark5').css('display','block');
    	$('#mark6').css('display','block');
    	$('#mark7').css('display','block');
    	$('#mark8').css('display','block');
    }, //evento al retirar el raton del texto 3
    function(){
    	$('#texto3').attr('src','img/Texto3.png');
    	$('#mark4').css('display','none');
    	$('#mark5').css('display','none');
    	$('#mark6').css('display','none');
    	$('#mark7').css('display','none');
    	$('#mark8').css('display','none');
    });
});