'use strict'
let name = prompt('Кто там?', '')

if(name == "Админ") {
    let password = prompt('Пароль?', '')
    if(password == "Я Главный") {
        alert('Здравствуйте!')
    } else if (password == '' || password == null) {
        alert('Отменено')
    } else if (password != "Я главный") {
        alert('Неверный пароль')
    } 
} else if (name == '' || name == null) {
    alert('Отменено')
} else if (name != "Админ") {
    alert('Я вас не заню')
}