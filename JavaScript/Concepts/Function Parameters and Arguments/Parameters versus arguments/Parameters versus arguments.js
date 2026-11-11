/* 
Parameters let a function receive information, so the same function can work with different values.
Parameter - Is a variable named in the function definition
Argument - Is a value supplied when calling the function.
*/

function greet(name) {
  // name = parameter
  console.log("Hello, " + name);
}

const name = "Ana";
greet(name); // Ana = argument
greet("Ben\n"); // Hello, Ben

// Arguments can come from variable

function describeWeather(city, temperature) {
  console.log(city + ": " + temperature + " degress\n\n");
}

const place = "Lisbon";
describeWeather(place, 18); // Lisbon: 18 degrees.
describeWeather(18, place); // 18: Lisbon degrees.

// Arguments match parameters by position.
