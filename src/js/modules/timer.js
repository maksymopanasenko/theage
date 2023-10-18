function calculateDate(n) {
  const today = new Date(Date.now());
  today.setDate(today.getDate() + n);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function timer() {
    const deadline = calculateDate(5);

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
}

export default timer;