$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            $('#up__arrow').fadeIn();
        } else {
            $('#up__arrow').fadeOut();
        }
    })
});