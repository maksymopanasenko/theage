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

    copyImg();
    putName(buy);
    
    $('[data-modal=buy]').on('click', function() {
      $('.overlay, #buy').fadeIn('slow');
    });

    $('[data-modal=reservation]').on('click', function() {
      $('#buy').fadeOut('slow');
      $('#reservation').fadeIn('slow');
    });

    $('[data-close=close-btn]').on('click', function() {
      $('.overlay, #buy, #reservation, #finish, #timer').fadeOut('slow');
    });


    // closing button
    
    $('.modal__close').on('click', function() {
      $('.overlay, #buy, #reservation, #finish, #timer').fadeOut('slow');
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

      const timer = setTimeout(function() {
        $('.overlay, #timer').fadeIn('slow');
      }, 6000);

  // ***Timer counting the rest time till the end of a scepial offer

  const deadline = '2022-12-20';

  function getTimeRemaining(endtime) {
    const difference = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours = Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((difference / (1000 * 60)) % 60),
          seconds = Math.floor((difference / 1000) % 60);

    return {
      'total': difference,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function setClockTimer(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClockTimer, 1000);

    function updateClockTimer() {
      const total = getTimeRemaining(endtime);

      days.innerHTML = total.days,
      hours.innerHTML = total.hours,
      minutes.innerHTML = total.minutes,
      seconds.innerHTML = total.seconds;

      if ( total.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClockTimer('.modal__timer', deadline);


  // ***Form validation

  const inputTicketNumber = document.querySelector('#ticketNum');

  if (typeof(inputTicketNumber) !== 'number') {
    $('.tickets__form').validate({
      rules: {
        ticketNum: "required",
        ticketDate: "required",
        ticketTime: "required"
      },
      messages: {
        ticketNum: "Wprowadź 9-cyfrowy numer z zakupionego biletu. Dozwolone tylko cyfry.",
        ticketDate: "Wybierz porządaną datę",
        ticketTime: "Wybierz porządaną godzinę"
      }
    });
  }


  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    reservat.innerHTML = `Twoja rezerwacja ${date.value} o godz. ${time.value} przebiegła pomyślnie. Numer biletu jest numerem Twojej rezerwacji.`;
    $(this).find("input").val("");
    $('.overlay, #finish').fadeIn('slow');
    
    $('form').trigger('reset');
    // return false;
  });


  $('.tickets__form').validate({
    rules: {
      ticketNum: "required",
      ticketDate: "required",
      ticketTime: "required"
    },
    messages: {
      ticketNum: "Wprowadź numer z zakupionego biletu",
      ticketDate: "Wybierz porządaną datę",
      ticketTime: "Wybierz porządaną godzinę"
    }
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






