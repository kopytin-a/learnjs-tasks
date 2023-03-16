'use strict'

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
    let arr = [];
    let src = list;
  
    while (src) {
      arr.push(src.value);
      src = src.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
 }

//  function printList(list) {

//   if (list.next) {
//     printList(list.next)
//   }

//   alert(list.value)

// }

alert(printList(list))