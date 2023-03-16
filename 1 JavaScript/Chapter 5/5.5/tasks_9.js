'use strict'
function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1)
}

let vasya = { name: "Вася", age: 25 }
let petya = { name: "Петя", age: 30 }
let masha = { name: "Маша", age: 28 }
let users = [vasya, petya, masha]

sortByAge(users)

alert(users[0].name); // Вася
alert(users[1].name); // Маша
alert(users[2].name); // Петя