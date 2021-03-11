'use strict';

const num = 20;

function showFirstMessage (text){
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);

// console.log(calc(4, 5));
// console.log(calc(6, 7));
// console.log(calc(3, 2));
// console.log(calc(4, 10));

// function calc (a, b) {
//   return (a + b);
// }

const logger = function (){
  console.log('Hello!');
};

logger();

function ret () {
  let num = 50;

  // Какойто код

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const calc = (a, b) => {
  return (a + b);
};

// Укороченая стрелочная функция
// const calc = (a, b) => a + b;

console.log(calc(4, 5));
console.log(calc(6, 7));
console.log(calc(3, 2));
console.log(calc(4, 10));

