'use strict';

const str = 'test';

console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str);

const str2 = 'teSt';

console.log(str2.toLowerCase());

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const logg = 'Hello World';

console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-6, -1));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test));
console.log(parseFloat(test));
