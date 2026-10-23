const weakMap = new WeakMap();

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

weakMap.set(obj1, 'Student');
weakMap.set(obj2, 'Teacher');

console.log(weakMap.get(obj1)); // Output: 'Student'
console.log(weakMap.has(obj2)); // Output: true

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // Output: false