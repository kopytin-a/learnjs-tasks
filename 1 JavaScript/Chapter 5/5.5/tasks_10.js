'use strict'
function shuffle(array) {
   array.sort(() => Math.random() - 0.5)
}

let array = [1, 2, 3]
shuffle(array)

alert(array)