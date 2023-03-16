'use strict'
function factorial(n){
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

alert(factorial(5))

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
  
//   alert( factorial(5) ); // 120