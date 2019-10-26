jQuery(function ($) {
  $('.slider').each(function () {
    $(this).slick({
      autoplay: true,
      // centerMode: true,
      // centerPadding: '100px',
        slidesToShow: 1,

      autoplaySpeed: 1000,
      dots: true,
      focusOnSelect: true,

      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 2,
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //     }
      //   },
      // ]

    });
  });

  $('.thumb').slick({
    asNavFor: '.slider',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
          // autoplaySpeed: 1000,

  }); 

});	