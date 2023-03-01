'use strict'
function readNumber() {
    let num
    do {
        num = prompt('Введите число', '') 
     } while (!isFinite (num)) 

    if (num == '' || num == null) return null

    return +num
}

alert(`Число: ${readNumber()}`)