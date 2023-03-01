'use strict'
function getSecondsToTomorrow() {
  let date = new Date()
  return 24 * 3600 - ((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds())
}

alert (getSecondsToTomorrow())