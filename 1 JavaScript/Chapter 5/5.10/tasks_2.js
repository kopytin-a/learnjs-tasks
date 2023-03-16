'use strict'
function topSalary(salaries) {
    let max = 0 
    let maxName = null

    for (let [name, sum] of Object.entries(salaries)) {
        if (max < sum) {
            max = sum
            maxName = name
        }
    }
    return maxName
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  }

  alert (topSalary(salaries))