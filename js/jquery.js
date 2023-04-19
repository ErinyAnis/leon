$(document).ready(function () {
    $('.fa-bars').click(function () {
        $('.nav').toggleClass('nav-toggle');
    });
        

    $(window).on('load scroll', function(){
        $('.nav').removeClass('nav-toggle');

        if($(window).scrollTop() > 10) {
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });
});