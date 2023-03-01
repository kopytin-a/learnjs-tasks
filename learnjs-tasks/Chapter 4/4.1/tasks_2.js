'use strict'

let schedule = {}

function isEmpty(schedule) {
    for (let key in schedule) {
       return false
    }
    return true
}

isEmpty()
