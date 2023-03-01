'use strict'
// function getWeekDay(date) {
//     let getDay
//     switch(date.getDay()) {
//         case 0:
//             getDay = 'ПН'
//             break
//         case 1:
//             getDay = 'ВТ'
//             break
//         case 2:
//             getDay = 'СР'
//             break
//         case 3:
//             getDay = 'ЧТ'
//             break
//         case 4:
//             getDay = 'ПТ'
//             break
//         case 5:
//             getDay = 'СБ'
//             break
//         case 6:
//             getDay = 'ВС'
//             break
//     }
//     return getDay
// }

// let date = new Date(2012, 0, 2)

// alert(getWeekDay(date))

function getWeekDay(date) {
    let dates = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПН', 'СБ', 'ВС']
    return dates[date.getDate() - 1]
  }
  
  let date = new Date(2012, 0, 2); // 3 января 2014 года
  alert( getWeekDay(date) );