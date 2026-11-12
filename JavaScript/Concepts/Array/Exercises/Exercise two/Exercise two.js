const books = [
  {
    title: 'Steve Jobs biografia',
    pages: 607,
  },
  {
    title: 'Meu pé de laranja lima',
    pages: 128,
  },
];

const reference = books;
const shallowCopy = [...books];

shallowCopy[0].title = 'Twisted Love'; // Yes, the original array and the reference were affect.

shallowCopy[1] = {
  title: 'Funny Story',
  pages: 308,
};

// shallowCopy and books are two diferent Arrays.

reference.push({
  title: 'Hábitos atómicos',
  pages: 268,
});

const newArray = reference;

console.log(books);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', pages: 308 },
  { title: 'Hábitos atómicos', pages: 268 }
]
*/

console.log(reference);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', pages: 308 },
  { title: 'Hábitos atómicos', pages: 268 }
]
*/

console.log(shallowCopy);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Meu pé de laranja lima', pages: 128 }
]
*/

console.log(newArray);
/*
[
  { title: 'Twisted Love', pages: 607 },
  { title: 'Funny Story', pages: 308 },
  { title: 'Hábitos atómicos', pages: 268 }
]
*/
