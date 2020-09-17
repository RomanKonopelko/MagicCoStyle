jQuery(document).ready(function ($) {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 1,
    asNavFor: '.thumbnail-slider',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
  $('.thumbnail-slider').slick({
    slidesToShow: 7,
    infinite: true,
    asNavFor: '.slider',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
});
