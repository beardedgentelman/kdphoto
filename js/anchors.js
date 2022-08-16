$(document).ready(function() {
    
    function bodyOverflow() {
        if($('body').css({'overflow': 'hidden'})) {
            $('body').css({'overflow': ''});
        }else {
            $('body').css('overflow', 'hidden');
        }
    }

    $('#gallery').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.gallery__container').offset().top }, 800);
        $('.header__nav').toggleClass('block');
        $('.header__burger').toggleClass('rotate');
        bodyOverflow()
    });
    $('#about-me').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__about-me').offset().top }, 800);
        $('.header__nav').toggleClass('block');
        $('.header__burger').toggleClass('rotate');
        bodyOverflow()
    });
    $('#price').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.main__price-list').offset().top }, 800);
        $('.header__nav').toggleClass('block');
        $('.header__burger').toggleClass('rotate');
        bodyOverflow()
    });
    $('#contact-me').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.form').offset().top }, 800);
        $('.header__nav').toggleClass('block');
        $('.header__burger').toggleClass('rotate');
        bodyOverflow()
    });
    $('#up__arrow').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800)
    })
});