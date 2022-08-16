const gallerySlider = new Swiper ('.gallery-slider', {
    
    loop: true,
    navigation: {
        nextEl: '.gs__next',
        prevEl: '.gs__prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});