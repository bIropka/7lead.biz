$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    /*setTimeout(function() {
        $('.sli').animate({opacity: 1});
    }, 500);

    /******************************
     ******* other scripts ********
     ******************************/

    /*$('.burger').click(function() {
        $(this).siblings('.nav').slideToggle();
    });*/

    $('.tab-controls li').click(function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    });


    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });

});


