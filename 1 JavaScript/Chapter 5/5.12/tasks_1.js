'use strict'
let user = {
  name: "Василий Иванович",
  age: 35
}

let json = JSON.stringify(user)
console.log(json)

let parse = JSON.parse(json)
console.log(parse)

// let user2 = JSON.parse(JSON.stringify(user))