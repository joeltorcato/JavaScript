const names = ["Max", "Manu", "Julie"];

// Index starts at zero
console.log(names[0]); // Max
names[0] = "Joel";
console.log(names[0]); // Joel
console.log(names.length); // 3 = ['Joel', 'Manu', 'Julie']
console.log(names);
names[10] = "Simão";
console.log(names); // 7 empty items
console.log(names.length); // 11 (The lenght is not the last existing index)

// push (adding element to the end)

const letter = ["A", "B"];
console.log("Before: ", letter); // A, B

const result = letter.push("D", "C");

console.log("After: ", letter); // A, B ,D, C
console.log("Returned: ", result); // 4
console.log("Lenght: ", letter.length);

// pop (removing th last element)
const colours = ["Red", "Blue", "Green"];
console.log("Before: ", colours); // Red, Blue, Green

const removed = colours.pop();
console.log("After: ", colours); // Red, Blue
console.log("Returned: ", removed);
console.log("Lenght: ", colours.length); // 2

// Optional experimentation (method pop)
const car = [];
console.log(car);
console.log(car.length);

// unshift (adding element to the beginning)
const numbers = [10, 20, 30];
console.log(numbers[1]); // 20
console.log(numbers.length); // 3

const adding = numbers.unshift(5, 7);

console.log(numbers); // 5, 7, 10, 20, 30
console.log(numbers[1]); // 7
console.log(numbers.length); // 4

// shift() - Removing the first element

const queue = ["Ana", "Ben", "Cara"];
console.log("Before: ", queue); // ["Ana", "Ben", "Cara"]

const b = queue.shift();

console.log("After: ", queue);
console.log("Returned: ", b);
console.log("Lenght", queue.length);
console.log("Index [0]: ", queue[0]);

// splice (changing elements at specific positions)

// Removing element
const esports = [10, 20, 30, 40];
console.log("Before: ", esports);

const remov = esports.splice(1, 2);

console.log("After: ", esports); // [10, 20]
console.log("Returned: ", remov); // [30, 40]
console.log("Lenght: ", esports.length); // 2

// Adding elements
const values = [10, 30];
console.log("Before: ", values); // [10, 30]

const a = values.splice(1, 0, 20);

console.log("After: ", values); // [10, 20, 30]
console.log("Returned: ", removed); // []
console.log("Lenght: ", values.length); // 3
