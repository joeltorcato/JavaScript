/* class Person 
{
  talk() {
    return "Talking";
  }
}

class SuperHuman extends Person 
{
  fly() {
    return "Flying";
  }
}

const me = new Person();
console.log(me.talk()); // Talking

const you = new SuperHuman();
console.log(you.fly()); // Flying
console.log(you.talk()); // Talking

// Demonstrating prototype relationships
const he = new Person();
console.log(Person.prototype === he.__proto__); // True

// Updating the prototype method
Person.prototype.talk = function () 
{
  return "New and improved talking";
};
console.log(he.talk()); // New and improved talking
console.log(Person.prototype.talk()); // New and improved talking

// Object inheritance via prototypes
const people = {
  talk() {
    return "talking";
  }
};

const she = {};
Object.setPrototypeOf(she, people);
console.log(she.talk()); // talking */

// Livro físico

function livroFisico({titulo, autor, numeroPaginas}) { // parent/base type
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
}

livroFisico.prototype.mostrarInformacoes = function () {
  return `\n${this.titulo}, de ${this.autor}, tem ${this.numeroPaginas} páginas`
}

livroFisico.prototype.tipo = function () {
  return "Livro físico"
}

livroFisico.prototype.abrir = function () {
  return "Openning the fisic book\n"
} 

  const MeuPeDeLaranjaLima_Fisico = new livroFisico({ 
  titulo: "Meu pé de laranja Lima",
  autor: "José Mauro",
  numeroPaginas: 128,
})

// Livro digital

function livroDigital({ titulo, autor, numeroPaginas, formato}) { // child/derived type
  livroFisico.call(this, {
    titulo,
    autor,
    numeroPaginas
  })
  this.formato = formato
}

// Establish the inheritance (relationship)
livroDigital.prototype = Object.create(livroFisico.prototype) // creates the inheritance link
livroDigital.prototype.constructor = livroDigital // corrects the constructor reference after replacing the prototype

livroDigital.prototype.abrir = function () {
  return `A abrir o livro no formato ${this.formato}\n`
} 

livroDigital.prototype.tipo = function () {
  return "Livro digital"
} 

const SteveJobsBiografia_Digital = new livroDigital({
  titulo: "A biografia de Steve Jobs",
  autor: "Walter Isaacson",
  numeroPaginas: 617,
  formato: "PDF"
})

console.log(MeuPeDeLaranjaLima_Fisico.mostrarInformacoes())
console.log(MeuPeDeLaranjaLima_Fisico.tipo())
console.log(MeuPeDeLaranjaLima_Fisico.abrir())

console.log(SteveJobsBiografia_Digital.mostrarInformacoes())
console.log(SteveJobsBiografia_Digital.tipo())
console.log(SteveJobsBiografia_Digital.abrir())

console.log(Object.getPrototypeOf(SteveJobsBiografia_Digital) === livroDigital.prototype) 
console.log(Object.getPrototypeOf(livroDigital.prototype) === livroFisico.prototype, "\n") 

// Study
console.log(SteveJobsBiografia_Digital instanceof livroDigital) //object instanceof constructor
console.log(SteveJobsBiografia_Digital instanceof livroFisico)
console.log(MeuPeDeLaranjaLima_Fisico instanceof livroFisico)
console.log(MeuPeDeLaranjaLima_Fisico instanceof livroDigital)
console.log(livroDigital.prototype.constructor === livroDigital,"\n") // true

/* prototype chain (Livro digital)

SteveJobsBiografia_Digital -> livroDigital.prototype -> livroFisico.prototype 
-> Obeject.prototypee -> null (undefined)
*/

/* prototype chain (Livro Fisico)

MeuPeDeLaranjaLime_Fisico -> livroFisico.prototype -> Object.prototype
-> null (undefined)
*/

/* Child -> can access parent
Paren -> cannot access child-specific properties
*/
