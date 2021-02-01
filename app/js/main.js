
$(function(){

    $('.top__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: false,
        nextArrow:false,
        dots:true,
    });

    
$('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:'<button class="slider__btn slider__btn--left"></button>',
    nextArrow:'<button class="slider__btn  slider__btn--right"></button>',
  });
      

    $("#phone").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    $("#phone2").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
    $("#phone3").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");


});