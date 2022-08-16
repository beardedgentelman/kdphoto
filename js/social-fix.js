$(window).scroll(function(){
    if($(this).scrollTop() > 400){
        $('.social__fixed').addClass('sticky');
    } else {
        $('.social__fixed').removeClass('sticky');
    }

    var $element = $('.footer');
    let counter = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top
     
      if (scroll > offset && counter == 0) {
        $('.social__fixed').removeClass('sticky');
        counter = 1;
      }
    });
});