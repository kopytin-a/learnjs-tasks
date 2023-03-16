'use strict'
function formatDate(date) {
  let day = new Date() - date

  if (day < 1000) { 
    return 'прямо сейчас';
  }

  let sec = Math.floor(day / 1000)

  if (sec < 60) {
    return sec + ' сек. назад';
  }

  let min = Math.floor(day / 60000)
  if (min < 60) {
    return min + ' мин. назад';
  }

  return date
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );