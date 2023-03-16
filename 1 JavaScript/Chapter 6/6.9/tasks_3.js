'use strict'

function debounce(f, ms) {
    let condition = false

    return function() {
      if (condition) return
  
      f.apply(this, arguments)
  
      condition = true
  
      setTimeout(() => condition = false, ms)
    };
}

let f = debounce(alert, 1000);
f("Hello World")