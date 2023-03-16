'use strict'
let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {name, years: age, isAdmin = false} = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false