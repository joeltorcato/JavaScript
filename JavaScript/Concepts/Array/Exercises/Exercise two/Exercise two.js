const books = [
  {
    title: 'Steve Jobs biografia',
    pages: 607,
  },
  {
    title: 'Meu pé de laranja lima',
    page: 128,
  },
];

const reference = books;
const shallowCopy = [...books];

reference[0].title = 'Twisted Love'; // Yes, the original array and the shallowCopys were affect.

reference[1] = {
  title: 'Funny Story',
  page: 308,
}; // Just the original array was affect.

reference.push({
  title: 'Hábitos atómicos',
  page: 268,
});

const newArray = reference;

console.log(books);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', page: 308 },
  { title: 'Hábitos atómicos', page: 268 }
]
*/

console.log(reference);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', page: 308 },
  { title: 'Hábitos atómicos', page: 268 }
]
*/

console.log(shallowCopy);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Meu pé de laranja lima', page: 128 }
]
*/

console.log(newArray);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', page: 308 },
  { title: 'Hábitos atómicos', page: 268 }
]
*/
