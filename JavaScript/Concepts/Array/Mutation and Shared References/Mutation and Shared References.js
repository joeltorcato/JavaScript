/* 
1. Multiple variable can reference the same Array
An Array is an object. A reference lets a variable refer to that object.
*/

/* 
 2. Reassignment changes what one variable references
 Mutation changes an existing Array. Reassignment changes the value held by a variable
 */

/* 
 3. Creating a separate Array with spread syntax
 Use [...original] to create a new Array containing the original's elements. 
 The ... spreads those element into the new Array.
 */

/*
 4. Important limintation: spread creates a shallow copy
 A shallow copy creates a separate outer Array. It does not duplicato objects or Arrays stored inside it:
 their references are copied
 */

function multipleVariables() {
  // 1. Multiple variable can reference the same Array

  const original = [10, 20]; // One Array with two references
  const shared = original;

  /* Notice that mutation worked with const. 
const prevents reassignment of the variable; it does not prevent changes to the array.
*/

  shared[0] = 99; // and element of the Array
  shared.push(100);

  console.log(original); // [99, 20, 100]
  console.log(shared); // [99, 20, 100]
  console.log(original === shared, "\n"); // true (not compare their contens)
}

function reassignment() {
  let current = [10, 20];
  const previous = current;

  current = [99]; // Reassignment (the variable itself)

  console.log(current); // [99]
  console.log(previous); // [10, 20]
  console.log(current === previous, "\n"); // false
}

/*
To indentify the operation, examine what receives the assignment
current = [99] - Variable - Reassignment
shared[0] = 99 - Array element - Mutation of the Array
shared.push(100) - Existing Array, through a method - Mutation of the Array
*/

function spreadSyntax() {
  const source = [10, 20];
  const copy = [...source];

  copy[0] = 99;
  copy.push(30);

  console.log(source); // [10, 20]
  console.log(copy); // [99, 20, 30]
  console.log(source === copy, "\n"); // false
}

function limintation() {
  const books = [
    {
      title: "Dune",
    },
    {
      title: "Freedom",
    },
  ];

  const copiedBooks = [...books];

  copiedBooks[0].title = "Dracula"; // Changing the shared object's property
  // copiedBooks[0] = { title: "Dracula" }; Replacing the copied Array's first element

  console.log(books); // [{ title: 'Dracula' }, { title: 'Freedom' }]
  console.log(books[1]); // { title: 'Freedom' }
  console.log(books[0].title); // Dracula
  console.log(copiedBooks[0].title); // Dracula
  console.log(books === copiedBooks); // false
  console.log(books[0] === copiedBooks[0], "\n"); // true
}

/* 
books[0].title
books refers to an Array
books[0] accesses its first element: the book object
.title accesses the title property of that object
*/

/* 
second = first - Shares the existing Array
second[0] = value - Mutates the Array referenced by second
second = [value] - Reassigns second to a new Array
second = [...first] - Creates a separate outer Array; nested objects remain shared
*/

multipleVariables();
reassignment();
spreadSyntax();
limintation();
