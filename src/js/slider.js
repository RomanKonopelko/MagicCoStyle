jQuery(document).ready(function ($) {
  $('.slider').slick({
    dots: false,
    variableWidth: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    slidesToShow: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $('.thumbnail-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    infinite: true,
    asNavFor: '.slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
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
