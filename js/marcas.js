$(function(){
    //evento al colocar el puntero del raton sobre el texto 1
    $('.texto1').hover(function(){
    	document.getElementById('text1').src = "img/Texto1_activado.png";
        document.getElementById('mark1').style.display="block";
        document.getElementById('mark2').style.display="block";
    }, //evento al retirar el raton del texto 1
    function(){
    	document.getElementById('text1').src = "img/Texto1.png";
        document.getElementById('mark1').style.display="none";
        document.getElementById('mark2').style.display="none";
    });
    //evento al colocar el puntero del raton sobre el texto 2
    $('.texto4').hover(function(){
    	document.getElementById('text2').src = "img/Texto2_activado.png";
    	document.getElementById('mark3').style.display="block";
    }, //evento al retirar el raton del texto 2
    function(){
    	document.getElementById('text2').src = "img/Texto2.png";
    	document.getElementById('mark3').style.display="none";
    });
    //evento al colocar el puntero del raton sobre el texto 3
    $('.texto3').hover(function(){
    	document.getElementById('text3').src = "img/Texto3_activado.png";
    	document.getElementById('mark4').style.display="block";
    	document.getElementById('mark5').style.display="block";
    	document.getElementById('mark6').style.display="block";
    	document.getElementById('mark7').style.display="block";
    	document.getElementById('mark8').style.display="block";
    }, //evento al retirar el raton del texto 3
    function(){
    	document.getElementById('text3').src = "img/Texto3.png";
    	document.getElementById('mark4').style.display="none";
    	document.getElementById('mark5').style.display="none";
    	document.getElementById('mark6').style.display="none";
    	document.getElementById('mark7').style.display="none";
    	document.getElementById('mark8').style.display="none";
    });
});