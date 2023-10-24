let TovarSlider = new Swiper('.tovar-slider', {
    // navigation:{
    //     nextEL: '.swiper-button-next',
    //     prevEL: '.swiper-button-prev'
    // },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,

        // renderBullet: function(index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },

        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },

        //type: 'progressbar',

    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    grabCursor: true,
    slideToClickedSlide: true,
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
        //eventtsTarget: ".block1",
    },
    autoHeight: true,
    slidesPerView: 2,
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 2,
    //loop: true,
    //freeMode: true,
    // autoplay: {
    //     delay: 4000,
    //     stopOnLastSlides: true,
    //     disableOnInteraction: false,
    // },
    speed: 800,
    //direction: 'vertical',

    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true,
    // },
    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true,
    // },
    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    // },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
    },
    //Для дочерних слайдеров
    //nested: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});

let OpisanieSlider = new Swiper('.opisanie-slider', {
    grabCursor: true,
    slideToClickedSlide: true,
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoHeight: true,
    slidesPerView: 2,
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 2,
    speed: 800,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});

TovarSlider.controller.control = OpisanieSlider;
OpisanieSlider.controller.control = TovarSlider;