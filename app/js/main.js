$(function () {
    $('.slider-item').slick({
        slidesToShow: 1,
        prevArrow: $('arrow__left'),
        nextArrow: $('arrow__right'),
        dotsClass: $('item-number')
    });
});