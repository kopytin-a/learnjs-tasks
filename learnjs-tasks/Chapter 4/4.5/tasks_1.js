'use strict'
function A(name) {
  return name
} 
function B(name) {
  return name
}

let a = new A('Join');
let b = new B('Join');

alert( A() == B() ); // true