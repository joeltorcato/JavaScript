const resultData = new Map();

resultData.set('Average', 1.54); // It won't show up
resultData.set('lastResult', null);

const germany = {
  name: 'Germany',
  population: 82
}; // It was deleted

resultData.set(germany, 0.89);

for (const result of resultData) {
  console.log(result);
}

resultData.set('Average', 33.89);

console.log(resultData);

console.log(resultData.get('Average')); // 33.89 (Map)
console.log(resultData.Average); // undefined (Object)

 resultData.delete(germany);
 console.log(resultData);
