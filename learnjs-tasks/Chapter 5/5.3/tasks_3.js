'use strict'
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return (str.substr(0, maxlength - 1) + '...')
    } else {
        return str
    }
}

alert (truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
alert (truncate("Всем привет!", 20))