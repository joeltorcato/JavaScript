const users = ['Alice', 'Bob', 'Charlie'];
const userObjects = users.map((name, index) => ({
  id: index + 1,
  name: name
}));
console.log(userObjects);
// Output: 
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ]