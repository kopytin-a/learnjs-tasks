'use strict'
function sumInput() {
    let arrs = []

    do {
        let num = prompt('Введите число', 0)
        if ( !isFinite(num) || num == '' || num == null) break
        arrs.push(+num)
    } while (true)

    let result = 0
    
    for (let arr of arrs) {
        result += arr
    }
    return result
}

alert(sumInput())