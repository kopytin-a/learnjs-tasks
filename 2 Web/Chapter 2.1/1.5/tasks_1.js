'use strict'

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data
    title = title.trim()

    let sum = li.getElementsByTagName('li').length

    alert(`${title + sum}`)
  }