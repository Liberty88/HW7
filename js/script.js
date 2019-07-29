let slide;
function slideCreator(){
    slide = $('.page-banner').slick({
        nextArrow: '<button type="button" class="slick-next"> <img src="../img/next.svg" class="page-banner__arrow-icon page-banner__arrow_next" alt="next" title="next"> </button>',
        prevArrow: '<button type="button" class="slick-prev"> <img src="../img/prev.svg" class="page-banner__arrow-icon page-banner__arrow_prev" alt="prev" title="prev"> </button>',
    });
}

let hamburger = $('.mobile-panel__icon_hamburger');
let menu = $('.page-nav');


hamburger.on('click', function () {
    menu.toggleClass('open');
    $('.body').toggleClass('hidden')
});



let media = window.matchMedia('(max-width: 600px)');
widthChange(media);
media.addListener(widthChange);


function widthChange(media) {
    if (media.matches) {
        slide.slick('unslick');
    } else {
        slideCreator();
        menu.removeClass('open');
    }
}
