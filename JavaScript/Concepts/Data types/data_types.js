// Data types

// String
let firstName = "Joel";
let lastName = 'Fernandes';

// Number
let num = 100;
let numFLoat =  75.5;

console.log(numFLoat);

// Boolean
let learning = true;
let completed = false;

console.log(learning);
console.log(typeof completed); // boolean

let number = 20 < 10;
console.log(number);

// Undefined
let age;
console.log(typeof age); // undefined
console.log(age); // undefined

// Null 
let secondNumber = null;

console.log(secondNumber); // null
console.log(typeof secondNumber) // object

// null == undefined

// Symbol (It's immutable and it is unique)

let foo = Symbol('name');
let bar = Symbol('name');

console.log(foo == bar);

let obj = {
  [Symbol('name')]: "Joel",
  [Symbol('age')]: 16,
  'city': "Lisbon",
};
const symbols = Object.getOwnPropertySymbols(obj);
// Object.getOwnPropertySymbols() returns an array of all symbol properties found directly on a given object.

const data = symbols.map(sym => obj[sym]);

console.log(data);
console.log(obj.city);
// console.log(data.); // See how to search for example age.