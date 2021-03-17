'use strict';

const arr = [2, 13, 12, 5, 26, 10, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr[99] = 23;

// console.log(arr.length);
// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift(10);

// console.log(arr);

// arr.push(9);

// console.log(arr);

// arr.forEach(function(item, i, arr){
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

const str = prompt('', '');
const products = str.split(', ');
console.log(products.join('; '));