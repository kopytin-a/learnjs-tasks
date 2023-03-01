'use strict'
function vfilterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
            let result = arr[i];

        if (result < a || result > b) {
            arr.splice(i, 1)
            i--
        }
    }
    console.log(arr)
}

vfilterRangeInPlace([1, 2, 3, 4, 5], 1, 5 )
vfilterRangeInPlace([1, 2, 3, 4, 5], 2, 5)
vfilterRangeInPlace([5, 3, 8, 1], 1, 4)