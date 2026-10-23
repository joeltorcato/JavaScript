const ids = new Set();

ids.add('abc');
ids.add(0);
ids.add(0);
ids.add(false)
ids.add({
  name: 'Joel',
  age: 16,
  single: true
})

for (const showsIds of ids) {  // for-of loop
  if (typeof showsIds === 'boolean') { // It is equal to if (showsIds === true || false)
    console.log("Has boolean values")
  } else
  console.log(showsIds)  
}

console.log(ids.has(true)) // false
console.log(ids.has('abc')) // true

console.log(ids);

if (ids.delete('abc')) {
  console.log('abc was deleted'); // true
} else {
  console.log('There is no string with the value abc'); // false
}
