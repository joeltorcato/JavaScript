// Reference Type

// Object

let person = 
{
  firstName: "Joel",
  lastName: "Fernandes",
  age: 16,
};

console.log(person);

console.log(typeof person.firstName); // String
console.log(person.lastName);
console.log(person.age);

console.log(typeof person); // Object

// Bug (null)
let n = null;
console.log(typeof n); // Object