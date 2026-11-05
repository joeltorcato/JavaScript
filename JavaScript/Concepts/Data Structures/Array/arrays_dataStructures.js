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

/* for (const el of names) {
  console.log(el);
}
names.push("Julie");
console.log(names.length); // 4 = ['Max', 'Manu', 'Julie', 'Julie']

// Function (Go through the entire matrix)
const julieIndex = names.find((el) => el === "Julie");
names.splice(2, 1);
console.log(names); */
