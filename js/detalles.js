$(function(){
    //evento al colocar el puntero del raton sobre el texto 1
    $('#texto1').hover(function(){
    	$('#texto1').attr('src','img/Texto1_activado.png');
        $('body').css('background','rgba(20,162,162,0.4)');
        $('#lib').css('display','block');
    }, //evento al retirar el raton del texto 1
    function(){
    	$('#texto1').attr('src', 'img/Texto1.png');
        $('body').css('background','rgba(120,120,120,0.4)');
        $('#lib').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 2
    $('#texto4').hover(function(){
    	$('#texto2').attr('src','img/Texto2_activado.png');
        $('body').css('background','rgba(20,162,162,0.4)');
    	$('#ofi').css('display','block');
    }, //evento al retirar el raton del texto 2
    function(){
    	$('#texto2').attr('src','img/Texto2.png');
        $('body').css('background','rgba(120,120,120,0.4)');
        $('#ofi').css('display','none');
    });
    //evento al colocar el puntero del raton sobre el texto 3
    $('#texto3').hover(function(){
    	$('#texto3').attr('src','img/Texto3_activado.png');
        $('body').css('background','rgba(20,162,162,0.4)');
    	$('#com').css('display','block');
    }, //evento al retirar el raton del texto 3
    function(){
    	$('#texto3').attr('src','img/Texto3.png');
        $('body').css('background','rgba(120,120,120,0.4)');
    	$('#com').css('display','none');
    });
});