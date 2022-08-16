document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', function() {
        this.classList.toggle('rotate');
        nav.classList.toggle('block');
        if(body.style.overflow) {
            body.style.removeProperty('overflow');
        }else {
            body.style.overflow = 'hidden';
        }
    });
});