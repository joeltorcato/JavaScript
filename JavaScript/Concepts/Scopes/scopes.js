// Scopes

var a = 0;
let b = 0;
const c = 0; 

console.log(`Global: ${a}`);
console.log(`Global: ${b}`);
console.log(`Global: ${c}`);

function firstFunction() {
  var a = 1;
  const b = 1;
  {
    var a = 2; // Function scope
    const b = 2; // Block scope

    console.log(`Block: ${a}`);
    console.log(`Block: ${b}`);
    console.log(`Block: ${c}`);
  }
  console.log(`Function: ${a}`);
  console.log(`Function: ${b}`);
  console.log(`Function: ${c}`);
}

firstFunction()