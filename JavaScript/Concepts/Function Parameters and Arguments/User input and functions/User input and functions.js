/*
Once terminal input has been collected, you can pass it like any other value

1. Store the answer in a variable
2. Use that variable as an argument
3. The receiving function accesses it through its parameter
*/

const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showGreeting(name) {
  console.log("Hello, " + name + "\n");
}

async function askName() {
  const answer = await rl.question("\nYour name: ");
  // console.log(typeof answer); String

  showGreeting(answer);
  rl.close();
}

askName();
