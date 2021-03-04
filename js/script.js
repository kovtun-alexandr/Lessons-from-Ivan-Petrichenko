"use strict";

let number = 5;

console.log(number);
console.log('str' * number);
console.log(number / 0);
console.log(-number / 0);

const string = 'Alex';

console.log(string);

const obj = {
  name: "Jogn",
  age: 36,
  isMarrege: false
};

console.log(obj.name);
// console.log(obj['name']);

const arr = [
  'banana',
  'orange',
  6,
  'apple',
  'cherry',
  {},
  []
];

console.log(arr[3]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

const answer = [];

// answer[0] = prompt('Как вас зовут?','');
// answer[1] = prompt('Какая у вас фамилия?','');
// answer[2] = prompt('Сколько вам лет?','');

// document.write(answer);

const category = 'toys';

// console.log('https://someone.com/' + category +  '/5');
console.log(`https://someone.com/${category}/5`);

const user = 'Vladislav';

// alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(5 % 2);

console.log(2 * 4 === 8);

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);