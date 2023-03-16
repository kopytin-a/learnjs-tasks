'use strict'
function getDateAgo(date, days) {
  let dates = new Date(date)

  dates.setDate(date.getDate() - days)
  return dates.getDate()
  
}

let date = new Date(2023, 1, 22);

alert( getDateAgo(date, 1) )
alert( getDateAgo(date, 2) )
alert( getDateAgo(date, 365) )