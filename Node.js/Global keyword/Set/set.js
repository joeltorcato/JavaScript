// Set

const mySet = new Set();
let myItem = mySet.entries();

mySet.add(1);
mySet.add(2);

console.log(mySet.entries());
console.log(mySet.values());
console.log(myItem.next().value);

function getRandom() {
  return Math.round(Math.random(10) * 10);
}

const yourSet = new Set();

while (yourSet.size < 10) {
  yourSet.add(getRandom());
}
console.log([...yourSet]);
