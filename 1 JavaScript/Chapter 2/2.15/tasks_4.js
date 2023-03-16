'use strict'
// function pow(x, n) {
//   if(n < 0) {
//     alert('Введите натуральное число')
//   } else {
//     alert(x ** n)
//   }
// }

// pow(3, 2)
// pow(3, 3)
// pow(1, 100)

function pow(x, n) {
  let result = x
  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Введите число", '');
let n = prompt("Введите степень", '');

if (n < 1) {
  alert('Введите натуральное число');
} else {
  alert( pow(x, n) );
}