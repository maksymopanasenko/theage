$(document).ready(function(){
    $('.herbivorous__wrapper').slick({
        dots: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>'
    });


    $('ul.tab-list').on('click', 'li:not(.tab-item_active)', function() {
        $(this)
          .addClass('tab-item_active').siblings().removeClass('tab-item_active')
          .closest('div.tab').find('div.herbivorous__wrapper').toggleClass('wrapper_active');
    });


    $('.area__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>'
    });
    
  });
