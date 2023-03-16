'use strict'
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

let year = 2012 //god
let month = 1 // mec9c

alert (getLastDayOfMonth(year, month))