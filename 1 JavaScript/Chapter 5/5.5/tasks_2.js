'use strict'
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}

console.log (filterRange([1, 2, 3, 4, 5], 1, 5 ))
console.log (filterRange([1, 2, 3, 4, 5], 2, 5))
console.log (filterRange([5, 3, 8, 1], 1, 4))