$(document).ready(function () {
    $('.indexmain').fadeTo(2000, 1).css('display','flex');
    $('.main').fadeTo(2000, 1).css('display','none');
    //changer de formulaire a partir des liens
    $('.btn1adds').click(function () {
        $('.cache').css('display','none');
        $('.indexmain').fadeTo(2000, 1).css('display','flex');
    
    
    });
    $('.btn2adds').click(function () {
        $('.cache').css('display','none');
        $('.main').fadeTo(2000, 1).css('display','block');
    
    });
    
    
    
    });
    