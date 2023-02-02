function sliderDino() {
    $('.dinosaurs__wrapper').slick({
        dots: true,
        dotsClass: 'dinosaurs__dots',
        speed: 1200,
        adaptiveHeight: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 1,
              arrows: false
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
              arrows: true,
              dots: false
            }
          }
        ]
    });
}

function sliderArea() {
    $('.area__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false
            }
          }
        ]
      });
}

export {sliderDino, sliderArea};