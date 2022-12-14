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
      
      name.forEach((item, i) => {
        item.addEventListener('click', () => {
          // modalBuy.style.display = 'block';
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
      $('#buy').css("display", "none");
      $('#reservation').fadeIn('slow');
    });

    $('[data-close=close-btn]').on('click', function() {
      $('.overlay, #buy, #reservation, #finish, #timer').fadeOut('slow');
    });


    // closing button
    
    $('.modal__close').on('click', function() {
      $('.overlay, #buy, #reservation, #finish, #timer').fadeOut('slow');
    });
    
    // up-button animation

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

    // const timer = setTimeout(function() {
    //   $('.overlay, #timer').fadeIn('slow');
    // }, 10000);
      

  // ***Timer counting the rest time till the end of a scepial offer


  const deadline = '2022-12-31';

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

  function addZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
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

      days.innerHTML = addZero(total.days),
      hours.innerHTML = addZero(total.hours),
      minutes.innerHTML = addZero(total.minutes),
      seconds.innerHTML = addZero(total.seconds);

      if ( total.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClockTimer('.modal__timer', deadline);


  // ***Form validation

  $('.tickets__form').validate({
    rules: {
      ticketNum: {
        required: true,
        maxlength: 9,
        minlength: 9
      },
      ticketDate: "required",
      ticketTime: "required"
    },
    messages: {
      ticketNum: "Wprowad?? 9-cyfrowy numer z zakupionego biletu. Dozwolone tylko cyfry.",
      ticketDate: "Wybierz porz??dan?? dat??",
      ticketTime: "Wybierz porz??dan?? godzin??"
    }
  });


  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    reservat.innerHTML = `Twoja rezerwacja ${date.value} o godz. ${time.value} przebieg??a pomy??lnie. Numer biletu jest numerem Twojej rezerwacji.`;
    $(this).find("input").val("");
    $('.overlay, #finish').fadeIn('slow');
    
    $('form').trigger('reset');
    // return false;
  });

  alert("Informujemy, i?? strona jest w trakcie rozbudowy. Niekt??re funkcje mog?? nie dzia??a?? lub mog?? nieprawid??owo. Za utrudnienia przepraszamy.");

    //???? ????
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






