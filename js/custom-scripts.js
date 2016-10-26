$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    /******************************
     ******* other scripts ********
     ******************************/

    $('.burger').click(function() {
        $(this).siblings('nav ul').slideToggle();
    });

    $('.tab-controls li').click(function() {
        if(!$(this).hasClass('active')) {
            var nextIndex = $(this).index();
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            $('.slider.active').removeClass('active');
            $('.slider').eq(nextIndex).addClass('active');
        }
    });


    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});


