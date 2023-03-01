'use strict'
function Calculator () {
  this.read = function () {
    this.num1 = +prompt('Первое число:', '')
    this.num2 = +prompt('Второе число:', '')
  },
  this.sum = function () {
    return this.num1 + this.num2
  },
  this.mul = function () {
    return this.num1 * this.num2
  }
}

let calculator = new Calculator();

calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );