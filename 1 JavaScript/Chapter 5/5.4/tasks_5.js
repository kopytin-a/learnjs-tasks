'use strict'
function getMaxSubSum(arr) {
    let maxSum = 0
    let sum = 0

    for (let num of arr) {
        sum += num
        maxSum = Math.max(maxSum, sum)
        if (sum < 0) {
            sum = 0
        }
    }
    return maxSum
}
alert (getMaxSubSum([-1, 2, 3, -9]))
alert (getMaxSubSum([2, -1, 2, 3, -9]))
alert (getMaxSubSum([-1, 2, 3, -9, 11])) 
alert (getMaxSubSum([-2, -1, 1, 2]))
alert (getMaxSubSum([100, -9, 2, -3, 5]))
alert (getMaxSubSum([1, 2, 3]))