'use strict';


let a = 5,
    b = a;

b = b + 5;

console.log(a);
console.log(b);

const oneObj = {
  a: 1,
  b: 2
};

const twoObj = oneObj;

twoObj.a = 16;

console.log(oneObj);
console.log(twoObj);

const mainObj = {
  a: 5,
  b: 10,
  c: {
    x: 9,
    y: 6
  },
  d: 22
};

function copy(obj) {
  let copyObj = {};
  
  for (let key in obj) {
    copyObj[key] = obj[key];
  }
  return copyObj;
}

const newMainObj = copy(mainObj);

console.log(mainObj);
console.log(newMainObj);

newMainObj.a = 12;
newMainObj.c.y = 50;

console.log(mainObj);
console.log(newMainObj);

const add = {
  a: 17,
  b: 33
};

// console.log(Object.assign(newMainObj, add));

const clone = Object.assign({}, add);

clone.a = 58;

console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dfdfdfdfdfd';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [5, 3, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

console.log(newAarray);

const q = {
  one: 1,
  two: 2
};

const newO0bj = {...q};

console.log(newOobj);

log