jQuery(document).ready(function ($) {
  $('.slider').slick({
    variableWidth: true,
    dots: false,
    infinite: true,
    speed: 1000,
    asNavFor: '.thumbnail-slider',
    mobileFirst: true,
    slidesToShow: 1,
    initialSlide: 2,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          asNavFor: false,
          adaptiveHeight: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $('.thumbnail-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    infinite: true,
    itemWidth: 500,
    asNavFor: '.slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          draggable: false,
          infinite: true,
          dots: false,
          centerMode: true,
          focusOnSelect: true,
        },
      },
    ],
  });
});
