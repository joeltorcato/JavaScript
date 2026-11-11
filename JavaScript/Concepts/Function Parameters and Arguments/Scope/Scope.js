/*
Scope determines where a variable's name is available. It helps keep each function's internal work separate
*/

// Local variable and parameters
function createGreeting(name) {
  const message = "\nHello, " + name;
  return message;
}

const greeting = createGreeting("Ana");
console.log(greeting + "\n"); // Hello, Ana.

// Surrounding scope versus the caller's scope

const city = "Lisbon";

function showCity(receivedCity) {
  console.log("\nSurrounding: ", city);
  console.log("Argument: ", receivedCity);
}

function start() {
  const city = "Porto\n";
  showCity(city);
}

start();
