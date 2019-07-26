$(document).ready(function () {
    $('.slider-item').slick({
        draggable: false,
        slidesToShow: 1,
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right')
    });
    $(".slider-item").on('afterChange', function(event, slick, currentSlide){
        $(".item-number").text(currentSlide + 1);
   });
});