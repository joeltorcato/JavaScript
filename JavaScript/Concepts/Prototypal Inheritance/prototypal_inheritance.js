class Person 
{
  talk() {
    return "Talking";
  }
}

class SuperHuman extends Person 
{
  fly() {
    return "Flying";
  }
}

const me = new Person();
console.log(me.talk()); // Talking

const you = new SuperHuman();
console.log(you.fly()); // Flying
console.log(you.talk()); // Talking

// Demonstrating prototype relationships
const he = new Person();
console.log(Person.prototype === he.__proto__); // True

// Updating the prototype method
Person.prototype.talk = function () 
{
  return "New and improved talking";
};
console.log(he.talk()); // New and improved talking
console.log(Person.prototype.talk()); // New and improved talking

// Object inheritance via prototypes
const people = {
  talk() {
    return "talking";
  }
};

const she = {};
Object.setPrototypeOf(she, people);
console.log(she.talk()); // talking
