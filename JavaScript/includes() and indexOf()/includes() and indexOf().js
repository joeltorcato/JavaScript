/* 
Use includes(value) when you need a yes-or-no answer. 
It returns true when the value existes and false otherwise 
*/

/* 
Use indexOf(value) when you need its postion.
It returns the first matching index, or -1 when absent (ausente).
It uses strict equality (===) to compare values.
*/

function includes() {
  // Is this value present?

  const numbers = [10, "20", 30];

  console.log(numbers.includes(20)); // false
  console.log(numbers.includes(99)); // false
  console.log(numbers.includes("20")); // true
  console.log(numbers, "\n"); // [10, '20', 30]
}

function indexOf() {
  // Where is this value

  const names = ["Ana", "Ben", "Ana"];

  console.log(names.indexOf("Ana")); // 0
  console.log(names.indexOf("Ana", 1)); // 2 (start at index 1)
  console.log(names.indexOf("Cara")); // -1
  console.log(names, "\n"); // ['Ana', 'Ben', 'Ana']
}

function all() {
  const scores = [10, 30, 25];

  console.log(scores.includes(25)); // true
  console.log(scores.indexOf(25)); // 2
  console.log(scores.find((score) => score > 20)); // 30 (just the first)
  console.log(
    scores.findIndex((score) => score > 20),
    "\n",
  ); // 1 (just the first)
}

function nothing() {
  const values = [NaN];

  console.log(values.includes(NaN)); // true
  console.log(values.indexOf(NaN), "\n"); // -1 (NaN === NaN is false)
}

includes();
indexOf();
all();
nothing();

/* 
includes() and indexOf() are searching for a supplied value
find() and findIndex() are testing a condition
*/
