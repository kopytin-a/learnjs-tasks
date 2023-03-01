'use strict'
function getAverageAge(users) {
   let sum = 0
   for (let userAge of users) {
      sum += userAge.age
   } 
   return sum / users.length
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let users = [ vasya, petya, masha ];

alert( getAverageAge(users))


// function getAverageAge(users) {

//    return users.reduce((num, nums) => num + nums.age, 0) / users.length
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let users = [ vasya, petya, masha ];

// alert( getAverageAge(users))