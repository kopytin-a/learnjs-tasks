'use strict'
function aclean(arr) {
  let map = new Map()
  for (let key of arr) {
    let result = key.toLowerCase().split('').sort().join()
    map.set(result, key)
  }
  return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

alert( aclean(arr) )