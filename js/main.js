$(function () {
  $('.slider').slick({
    nextArrow: '<button class="slick-arrow slick-next btn"><img src="images/next.svg" alt="next arrow" /></button>',
    prevArrow: '<button class="slick-arrow slick-prev btn"><img src="images/prev.svg" alt="prev arrow" /></button>',
    fade: true,
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
