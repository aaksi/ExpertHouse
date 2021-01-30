
$(function(){

    $('.top__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: false,
        nextArrow:false,
        dots:true,
    });

    $("#phone").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    $("#phone2").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");


});