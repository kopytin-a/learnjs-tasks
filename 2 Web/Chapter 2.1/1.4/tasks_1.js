'use strict'

// 1. Таблица с id="age-table".
let table = document.getElementById('age-table')

// 2. Все label в этой таблице
document.querySelectorAll('#age-table label')

// 3. Первый td в этой таблице
table.querySelector('td')

// 4. Форма с name="search"
document.querySelector('form[name="search"]')

// 5. Первый input в этой форме
form.querySelector('input')

// 6. Последний input в этой форме
let inputs = form.querySelectorAll('input') // найти все input
inputs[inputs.length-1] // взять последний