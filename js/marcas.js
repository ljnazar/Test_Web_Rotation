$(function(){
    //evento al colocar el puntero del raton sobre el texto
    $('.texto1').hover(function(){
        document.getElementById('mark1').style.display="block";
        document.getElementById('mark2').style.display="block";
    }, //evento al retirar el raton del elemento
    function(){
        document.getElementById('mark1').style.display="none";
        document.getElementById('mark2').style.display="none";
    });
});
