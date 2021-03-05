'use strict';

if(4 === 9){
  console.log('True');
} else {
  console.log('False');
}

const num = 50;

if(num < 49){
  console.log('num < 49');
} else if(num > 100){
  console.log('num > 100');
} else {
  console.log('Ok!');
}

const switchNum = 50;

switch (switchNum){
  case 49:
    console.log('Num = 49');
    break;
  case 100:
    console.log('Num = 100');
    break;
  case 50:
    console.log('Num = 50');
    break;
  default:
    console.log('False!');
    break;
}