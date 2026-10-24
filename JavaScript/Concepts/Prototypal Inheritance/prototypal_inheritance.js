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

function livroFisico({titulo, autor, numeroPaginas}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
}

livroFisico.prototype.mostrarInformacoes = function () {
  return `${this.titulo}, de ${this.autor}, tem ${this.numeroPaginas} de páginas`
}

livroFisico.prototype.tipo = function () {
  return "Livro físico"
}

// Livro digital

function livroDigital({ titulo, autor, numeroPaginas, formato}) {
  livroFisico.call(this, {
    titulo,
    autor,
    numeroPaginas
  })
  this.formato = formato
}

// Estudar
livroDigital.prototype = Object.create(livroFisico.prototype)
livroDigital.prototype.constructor = livroDigital

livroDigital.prototype.abrir = function () {
  return `A abrir o livro no formato ${this.formato}`
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

const MeuPeDeLaranjaLima_Fisico = new livroFisico({
  titulo: "Meu pé de laranja Lima",
  autor: "José Mauro",
  numeroPaginas: 128,
})

console.log(MeuPeDeLaranjaLima_Fisico.mostrarInformacoes())
console.log(MeuPeDeLaranjaLima_Fisico.tipo())

console.log(SteveJobsBiografia_Digital.mostrarInformacoes())
console.log(SteveJobsBiografia_Digital.tipo())
console.log(SteveJobsBiografia_Digital.abrir())

console.log(Object.getPrototypeOf(SteveJobsBiografia_Digital) === livroDigital.prototype) // motivo
console.log(Object.getPrototypeOf(livroDigital.prototype) === livroFisico.prototype) 

console.log(SteveJobsBiografia_Digital instanceof livroDigital)
console.log(SteveJobsBiografia_Digital instanceof livroFisico)
console.log(MeuPeDeLaranjaLima_Fisico instanceof livroFisico)
console.log(MeuPeDeLaranjaLima_Fisico instanceof livroDigital)
