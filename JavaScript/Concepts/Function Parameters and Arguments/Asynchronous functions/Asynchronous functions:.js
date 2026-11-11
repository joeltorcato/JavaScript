/*
A Promise represents an operation's eventual success or failure
*/

async function createGreeting(name) {
  return "Hello, " + name + "\n";
}

async function main() {
  const pendingGreeting = createGreeting("Ana");
  console.log(pendingGreeting instanceof Promise);
  const message = await pendingGreeting;
  console.log(message);
}

main();

// Applying this to terminal input

const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function collectName() {
  const answer = await rl.question("Your name: ");

  rl.close();
  return answer;
}

function showGreeting(name) {
  console.log("\nHello, " + name);
}

async function main() {
  const visitor = await collectName();
  showGreeting(visitor);
}

main();
