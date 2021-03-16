'use strict';

const options = {
  name: 'test',
  width: 1920,
  height: 1080,
  color: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log('test');
  }
};

options.makeTest();

console.log(Object.keys(options).length);

for (let key in options) {
  if (typeof(options[key]) == 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}

console.log(options);

delete options.name;

console.log(options);

// console.log(options['color']['border']);

// Диструктуризация
const {border, bg} = options.color;

console.log(bg);