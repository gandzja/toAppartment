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

  let headerItem = $('.menu__list-item');

  headerItem.on('click', function (event) {
    event.preventDefault();
    $('.menu__list-link--active').toggleClass('menu__list-link--active');
    $(this).toggleClass('menu__list-link--active');
  });
});
