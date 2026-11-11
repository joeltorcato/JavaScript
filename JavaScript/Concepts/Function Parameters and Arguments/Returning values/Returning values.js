/*
An argument sends information into a function. A return value sends a result back to the caller
- the code that called the function.
*/

function createGreeting(name) {
  return "Hello, " + name;
}

const message = createGreeting("Ana");

console.log("\n" + message); // Hello, Ana
console.log(message + "!\n"); // Hello, Ana!

function displayGreeting(name) {
  console.log("Hello, " + name);
}

const result = displayGreeting("Ben"); // Hello, Ben
console.log(result + "\n"); // undefined
