'use strict'
function camelize(str) {
    return str
        .split('-')
        .map ((char, index) => index == 0 ? char : char[0].toUpperCase() + char.slice(1))
        .join('')
}

console.log (camelize("background-color"))
console.log (camelize("list-style-image"))
console.log (camelize("-webkit-transition"))