const weakSet = new WeakSet();

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true

weakSet.delete(obj1);
console.log(weakSet.has(obj1));