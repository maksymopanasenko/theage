"use strict"

import timer from "./modules/timer";
import {dataPiker, timePicker} from "./modules/pikers";
import {formValidation} from "./modules/forms";
import { sliderArea, sliderDino } from "./modules/sliders";
import tabs from "./modules/tabs";
import postData from "./services/service";



document.addEventListener('DOMContentLoaded', () => {
    sliderDino();

    tabs();

    sliderArea();

    // data-/timepickers

    dataPiker();

    timePicker();

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

  const timerStart = setTimeout(function() {
    $('.overlay, #timer').fadeIn('slow');
  }, 5000);
    

  // ***Timer counting the rest time till the end of a scepial offer

  timer();


  // ***Form validation


  formValidation();


  // $('form').submit(function(e) {
  //   e.preventDefault();

  //   if (!$(this).valid()) {
  //     return;
  //   }

  //   reservat.innerHTML = `Twoja rezerwacja ${date.value} o godz. ${time.value} przebiegła pomyślnie. Numer biletu jest numerem Twojej rezerwacji.`;
  //   $(this).find("input").val("");
  //   $('.overlay, #finish').fadeIn('slow');

  //   $('form').trigger('reset');
  //   // return false;
  // });




  // server part

  const reservationForm = document.querySelector('form');

  remainingReservationData(reservationForm);


  function remainingReservationData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!$('form').valid()) {
        return;
      }

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/reservations', json)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        reservat.innerHTML = `Twoja rezerwacja ${data.ticketDate} o godz. ${data.ticketTime} przebiegła pomyślnie. Numer biletu jest numerem Twojej rezerwacji.`;
        $(this).find("input").val("");
        $('.overlay, #finish').fadeIn('slow');

        $('form').trigger('reset');
      });
    });
  }



  alert("Informujemy, iż strona jest w trakcie rozbudowy. Niektóre funkcje mogą nie działać lub mogą nieprawidłowo. Za utrudnienia przepraszamy.");
});






