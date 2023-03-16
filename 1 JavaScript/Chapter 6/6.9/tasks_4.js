'use strict'

function throttle(func, ms) {

  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {

    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function() {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

let f = throttle(alert, 1000);

f("Hello World")