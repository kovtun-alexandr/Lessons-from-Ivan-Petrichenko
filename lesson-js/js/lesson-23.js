'use strict';

const str = 'some';
const strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello');
  }
};

const john = Object.create(soldier);

// const john = {
//   health: 100
// };

// john.__proto__ = soldier; //Устаревший метод который не используется!

// Object.setPrototypeOf(john, soldier);

console.log(john);
console.log(john.armor);
john.sayHello();