const names = ['Max', 'Manu', 'Julie', 'Max']

// Index starts at zero
console.log(names[0]);
console.log(names.length) // 3 = ['Max', 'Manu', 'Julie']

for (const el of names) {
  console.log(el);
}
names.push('Julie');
console.log(names.length) // 4 = ['Max', 'Manu', 'Julie', 'Julie']

// Function (Go through the entire matrix)
const julieIndex = names.find(el => el === 'Julie');
names.splice(2, 1);
console.log(names);



