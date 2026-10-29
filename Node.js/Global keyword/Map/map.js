// Map

const myMap = new Map();
let obj = { a: 1 };
console.log(myMap.set(obj, 'This is my object'));

function sample() {
  console.log('Hi');
}
console.log(myMap.set(sample, 'This is a function'));

const calculator = {
  add: (a, b) => a + b,
  minus: (a, b) => a - b,
};

const yourMap = new Map();

myMap.set(calculator.add, 'This is a add function');
myMap.set(calculator.minus, 'This is a minus function');

function getDescription(_funName) {
  return yourMap.get(_funName);
}

console.log(getDescription(calculator.minus));
