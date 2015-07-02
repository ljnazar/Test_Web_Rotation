$(function(){
    //evento al colocar el puntero del raton sobre el cartel
    $('.texto1').hover(function(){
        document.getElementById('mark1').style.display="block";
    }, //evento al retirar el raton del elemento
    function(){
        document.getElementById('mark1').style.display="none";
    });
});
