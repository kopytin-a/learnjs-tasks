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

// function printList(list) {
//   let src = list;

//   while (src) {
//     alert(src.value);
//     src = src.next;
//   }
//  }

 function printList(list) {

  alert(list.value)

  if (list.next) {
    printList(list.next)
  }

}

alert(printList(list))