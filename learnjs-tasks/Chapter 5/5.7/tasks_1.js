'use strict'
function unique(arr) {
   let set = new Set()

   for(let str of arr) {
      set.add(str)
   }
   return Array.from(set)
 }
 
 let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
 ];
 
 alert( unique(values) ); // Hare,Krishna,:-O

//  function unique(arr) {
//     return Array.from(new Set(arr));
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare,Krishna,:-O