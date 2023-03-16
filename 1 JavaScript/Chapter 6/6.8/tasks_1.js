'use strict'

// function printNumbers(from, to) {
//   let number = from
 
//   setTimeout(function num() {
//     alert(number)
//     if(number < to) {
//       setTimeout(num, 1000)
//     }
//     number++
//   }, 1000)
// }

// printNumbers(1, 5)


function printNumbers(from, to) {
  let number = from
 
  let time = setInterval(function() {
    console.log(number)
    if(number == to) {
      clearInterval(time)
    }
    number++
  }, 1000)
}

printNumbers(1, 5)