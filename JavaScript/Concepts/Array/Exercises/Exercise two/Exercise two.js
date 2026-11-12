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

let reference = books;
const shallowCopy = [...books];

shallowCopy[0].title = 'Twisted Love';

console.log(books);
console.log(reference);
console.log(shallowCopy, '\n\n\n');

shallowCopy[1] = {
  title: 'Funny Story',
  pages: 308,
};

console.log(books);
console.log(reference);
console.log(shallowCopy, '\n\n\n');

// shallowCopy and books are two diferent Arrays.

reference.push({
  title: 'Hábitos atómicos',
  pages: 268,
});

console.log(books);
console.log(reference);
console.log(shallowCopy, '\n\n\n');

let newArray = ["I don't know what put here", 'I love chess'];
reference = newArray;

console.log(books);
console.log(reference);
console.log(shallowCopy);
console.log(newArray);
