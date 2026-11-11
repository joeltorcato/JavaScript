/*
A function can use its parameter as an argument when calling another function.
*/

function showGreeting(name) {
  console.log("Hello, " + name + "\n");
}

function welcomeVisitor(visitor) {
  console.log("\nVisitor received: ", visitor);
  showGreeting(visitor);
}

welcomeVisitor("Ana");

/*
Visitor received: Ana
Hello, Ana
*/
