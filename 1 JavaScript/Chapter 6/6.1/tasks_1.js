'use strict'
// function sumTo(n) {
//   let sum = 0
//   for(let i = 0; i <= n; i++) {
//     sum += i
//   }
//   return sum
// }

// alert( sumTo(100) ); // 5050

// function sumTo(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n + sumTo(n-1);
//   }
// }

// alert( sumTo(100) ); // 5050

function sumTo(n) {
    return n * (n + 1) / 2;
}

alert( sumTo(100) ); // 5050