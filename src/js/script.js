$(document).ready(function(){
    $('.dinosaurs__wrapper').slick({
        dots: true,
        dotsClass: 'dinosaurs__dots',
        speed: 1200,
        adaptiveHeight: true,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 1,
              arrows: false
            }
          },
          {
            breakpoint: 576,
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


    $('ul.tab-list').on('click', 'li:not(.tab-item_active)', function() {
        $(this)
          .addClass('tab-item_active').siblings().removeClass('tab-item_active')
          .closest('div.tab').find('div.dinosaurs__wrapper').toggleClass('wrapper_active');
    });


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

    // data-/timepickers

    $( "#datepicker" ).datepicker({
      dateFormat: "dd.mm.yy",
      firstDay: 1
    });
    
    $('#timepicker').timepicker({
      timeFormat: 'H:mm',
      interval: 60,
      minTime: '9',
      maxTime: '6:00pm',
      defaultTime: '',
      startTime: '9:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
    });

    const date = document.querySelector('#datepicker'),
          time = document.querySelector('#timepicker'),
          areaImg = document.querySelectorAll('.area__img'),
          buy = document.querySelectorAll('[data-modal=buy'),
          modalBuy = document.querySelector('#buy'),
          reservat = document.querySelector('.modal__text'),
          ticketName = document.querySelectorAll('.tickets__item__title'),
          ticketPrice = document.querySelectorAll('.tickets__item__price'),
          ticketImg = document.querySelectorAll('.tickets__img'),
          orderName = document.querySelector('.modal__subtitle span'),
          priceValue = document.querySelector('.modal__total span'),
          dots = document.querySelectorAll('.area__wrapper .slick-dots li'),
          orderImg = document.querySelector('.modal__img');
          
    const copyImg = () => {
      dots.forEach((item, i) => {
        item.innerHTML = areaImg[i+1].innerHTML;
      });
    }

    copyImg();


    const putName = (name) => {
      modalBuy.style.display = 'block';
      name.forEach((item, i) => {
        item.addEventListener('click', () => {
          orderName.innerHTML = ticketName[i].innerHTML;
          orderImg.innerHTML = ticketImg[i].innerHTML;
          priceValue.innerHTML = ticketPrice[i].innerHTML;
        });
        
      });
    }
    putName(buy);
    
    $('[data-modal=buy]').on('click', function() {
      $('.overlay, #buy').fadeIn('slow');
    });

    $('[data-modal=reservation]').on('click', function() {
      $('#buy').fadeOut('slow');
      $('#reservation').fadeIn('slow');
    });

    $('#reservat').on('click', function() {
      $('.overlay, #buy, #reservation').fadeOut('slow');
    });

    // closing button
    
    $('.modal__close').on('click', function() {
      $('.overlay, #buy, #reservation, #finish').fadeOut('slow');
    });

    

    document.querySelector('.tickets__form').addEventListener('submit', (e) => {
      e.preventDefault();

      reservat.innerHTML = `Twoja rezerwacja ${date.value} o godz. ${time.value} przebiegła pomyślnie. Numer biletu jest numerem Twojej rezerwacji.`;
      $('.overlay, #finish').fadeIn('slow');
      
      document.querySelector('.tickets__form').reset();
    });
    

    $('.upbutton').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 300);
    });

    const hamburger = document.querySelector('.header__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeListElem = document.querySelectorAll('.menu__link');

      hamburger.addEventListener('click', () => {
          menu.classList.add('menu__active');
      });

      closeListElem.forEach(item => {
        item.addEventListener('click', () => {
          menu.classList.remove('menu__active');
        });
      }); 

      closeElem.addEventListener('click', () => {
          menu.classList.remove('menu__active');
      });


      // alert("Informujemy, iż strona jest w trakcie rozbudowy. Niektóre funkcje mogą nie działać lub mogą nieprawidłowo. Za utrudnienia przepraszamy.");

    //хз шо
    // const dotsDino = document.querySelector('.dinosaurs__dots'),
    //       liDino = dotsDino.querySelectorAll('li');
    
    //   liDino.forEach(item => {
    //     for (let i of item.children) {
    //       console.log(i);
    //       if (i.innerHTML < 19) {
    //         i.style.cssText = "display: none";
    //         item.style.margin = '0';
    //       }
    //     }
        
    //   });

});






