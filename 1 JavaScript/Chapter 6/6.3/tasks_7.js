'use strict'
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let num = i
    let shooter = function() { // функция shooter
      alert( num ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5](); 