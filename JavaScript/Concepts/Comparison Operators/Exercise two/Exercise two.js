const tickets = 5;
const ticketsRequested = 3;

console.log(tickets >= ticketsRequested); // true
console.log(ticketsRequested > tickets); // false
console.log(ticketsRequested === tickets); // false

const maximumNumberTicketsPerCustomer = 4;

console.log(ticketsRequested <= maximumNumberTicketsPerCustomer); // true

const a = "20";
const b = "100";

console.log(a > b); // true (comparing strings alphabetically)
console.log(Number(a) > Number(b)); // false

const x = 18;
const y = "18";

console.log(x >= y); // truen (numeric comparation)
console.log(x === y); // false
