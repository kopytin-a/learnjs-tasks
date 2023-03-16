'use strict'

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }

}

let f = delay(alert, 2000)

f("Hello World")