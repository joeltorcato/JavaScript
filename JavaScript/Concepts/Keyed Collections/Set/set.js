const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, ignored
console.log(mySet); // Output: Set { 1, 2 }
console.log(mySet.size); // Output: 2