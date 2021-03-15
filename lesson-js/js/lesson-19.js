'use strict';

function first() {
  setTimeout(function(){
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function done() {
  console.log('Я прошел этот урок!');
}

function learnJS (lang, collback) {
  console.log(`Я изучаю: ${lang}`);
  collback();
}

learnJS('JavaScript', done);