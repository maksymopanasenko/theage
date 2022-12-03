$(document).ready(function(){
    $('.dinosaurs__wrapper').slick({
        dots: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>'
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
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>'
    });

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
          buy = document.querySelectorAll('[data-modal=buy'),
          modalBuy = document.querySelector('#buy'),
          reservat = document.querySelector('.modal__text'),
          ticketName = document.querySelectorAll('.tickets__item__title'),
          ticketPrice = document.querySelectorAll('.tickets__item__price'),
          ticketImg = document.querySelectorAll('.tickets__img'),
          orderName = document.querySelector('.modal__subtitle span'),
          priceValue = document.querySelector('.modal__total span'),
          orderImg = document.querySelector('.modal__img');
          



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

      reservat.innerHTML = `Твоя резервація ${date.value} о годині ${time.value} завершилася успіхом. Номер квитка являється одночасно номером резервації.`;
      $('.overlay, #finish').fadeIn('slow');
      
      document.querySelector('.tickets__form').reset();
    });
    

    $('.upbutton').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 300);
    });
  });


