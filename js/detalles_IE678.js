$(function(){
    //evento al colocar el puntero del raton sobre el texto 1
    $('#texto1').hover(function(){
    	$('#texto1').attr('src','img/Texto1_activado.png');
        $('body').css('background','#95efff');
        $('#lib').css('display','block');
    }, //evento al retirar el raton del texto 1
    function(){
    	$('#texto1').attr('src', 'img/Texto1.png');
        $('body').css('background','#bbbbbb');
        $('#lib').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 2
    $('#texto4').hover(function(){
    	$('#texto2').attr('src','img/Texto2_activado.png');
        $('body').css('background','#95efff');
    	$('#ofi').css('display','block');
    }, //evento al retirar el raton del texto 2
    function(){
    	$('#texto2').attr('src','img/Texto2.png');
        $('body').css('background','#bbbbbb');
        $('#ofi').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 3
    $('#texto3').hover(function(){
    	$('#texto3').attr('src','img/Texto3_activado.png');
        $('body').css('background','#95efff');
    	$('#com').css('display','block');
    }, //evento al retirar el raton del texto 3
    function(){
    	$('#texto3').attr('src','img/Texto3.png');
        $('body').css('background','#bbbbbb');
    	$('#com').css('display','none');
    });
});