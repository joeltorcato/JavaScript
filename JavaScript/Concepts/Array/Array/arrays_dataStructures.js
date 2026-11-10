function push() {
  // push (adding element to the end)

  const letter = ["A", "B"];
  console.log("\nBefore: ", letter); // ['A', 'B']

  const result = letter.push("D", "C");

  console.log("After: ", letter); // ['A', 'B', 'D', 'C']
  console.log("Returned: ", result); // 4
  console.log("Lenght: ", letter.length); // 4
}

function pop() {
  // pop (removing th last element)
  let colours = ["Red", "Blue", "Green"];
  console.log("\nBefore: ", colours); // ['Red', 'Blue', 'Green']

  const removed = colours.pop();

  console.log("After: ", colours); // ['Red', 'Blue']
  console.log("Returned: ", removed); // Green
  console.log("Lenght: ", colours.length); // 2

  colours = [];

  console.log(colours); // []
  console.log(colours.length); // 0
}

function unshift() {
  // unshift (adding element to the beginning)

  const names = ["Ben", "Cara"];
  console.log("\nBefore: ", names); // ['Ben', 'Cara']

  const result = names.unshift("Ana");

  console.log("After: ", names); // ['Ana', Ben', 'Cara']
  console.log("Returned: ", result); // 3
  console.log("Lenght: ", names.length); // 3
  console.log("Index 1: ", names[1]); // Ben
}

function shift() {
  // shift() - Removing the first element

  const queue = ["Ana", "Ben", "Cara"];
  console.log("\nBefore: ", queue); // ['Ana', 'Ben', 'Cara']

  const removed = queue.shift();

  console.log("After: ", queue); // ['Ben', 'Cara']
  console.log("Returned: ", removed); // Ana
  console.log("Lenght", queue.length); // 2
  console.log("Index [0]: ", queue[0]); // Ben
}

function splice() {
  // splice (changing elements at specific positions) (startIndex, deleteCount, value1, value2, value99);

  // Removing element
  const numbers = [10, 20, 30, 40];
  console.log("\nBefore: ", numbers); // [10, 20, 30, 40]

  const removed = numbers.splice(1, 2);

  console.log("After: ", numbers); // [10, 40]
  console.log("Returned: ", removed); // [20, 30]
  console.log("Lenght: ", numbers.length); // 2

  // Adding elements
  const values = [10, 30];
  console.log("\nBefore: ", values); // [10, 30]

  const adding = values.splice(1, 0, 20);

  console.log("After: ", values); // [10, 20, 30]
  console.log("Returned: ", adding); // []
  console.log("Lenght: ", values.length); // 3

  // Replacing element
  const scores = [10, 20, 30];
  console.log("\nBefore: ", scores); // [10, 20, 30]

  const replacing = scores.splice(1, 1, 99, 100);

  console.log("After: ", scores); // [10, 99, 100, 30]
  console.log("Returned: ", replacing); // [20]
  console.log("Lenght: ", scores.length); // 4
  console.log("Index [2]: ", scores[2]); // 100
}

push();
pop();
unshift();
shift();
splice();
