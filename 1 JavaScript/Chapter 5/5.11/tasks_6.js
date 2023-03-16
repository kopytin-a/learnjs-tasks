'use strict'
function getSecondsToday() {
  let date = new Date()

  return ((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds())
}

alert (getSecondsToday())