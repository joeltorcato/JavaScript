// Prototypes

/* const person = {
  name: "Joel"
}

console.log(person);

function Person(fName, lName) {
  this.firstName = fName,
  this.lastName = lName
}

Person.prototype.gender = "Male";
// Person.gender = "Male" Error

Person.prototype.getFullName = function() {
  return this.firstName +" "+ this.lastName
}

const person1 = new Person("Joel", "Fernandes");
const person2 = new Person("Susana", "Torcato");

console.log(person1);
console.log(person2.gender);
console.log(person1.getFullName()); 
console.log(Object.getPrototypeOf(person1))

// Changing prototype value

function Person() {
  this.name = "Joel Fernandes"
}

Person.prototype.age = 16;

const person1 = new Person();

Person.prototype = {age: 15}

const person2 = new Person()

console.log(person1.age);
console.log(person2.age); */

/* argumentos por posição (adquado quando há poucos argumentos e todos obrigatórios)
function Livro(nome, autor, numeroPaginas, marcador, avaliacao) { 
  this.nome = nome,
  this.autor = autor,
  this.numeroPaginas = numeroPaginas,
  this.marcador = marcador,
  this.avaliacao = avaliacao
}

objeto de opções sem desestruturação 

function Livro(opcoes) {
  this.nome = opcoes.nome;
  this.autor = opcoes.autor;
  this.numeroPaginas = opcoes.numeroPaginas;
  this.marcador = opcoes.marcador;
  this.avaliacao = opcoes.avaliacao;
}
*/

function Livro({ nome, autor, numeroPaginas, marcador, avaliacao }) { // objeto de opção com desestruturação
  this.nome = nome;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.marcador = marcador;
  this.avaliacao = avaliacao;
} // Cria propriedades próprias em cada livro (propriedade própria)



Livro.prototype.loja = 'Fnac' // é um objeto associado (comundo a todos os livros, steve jobs biografia, meu pé de laranja lima, entre outros)

Livro.prototype.mostrarRequesitos = function () { // propriedade do protótipo
  console.log(`O nome do livro é ${this.nome}`)
  console.log(`Tu compraste à loja da ${Livro.prototype.loja}`) // this.loja
}

/* const SteveJobsBiografia = new Livro('A biografia de Steve Jobs', 'Walter Isaacson', 607, 'Muito bom', false)
const MeuPeDeLaranjaLima = new Livro('Meu pé de laranja lima', 'José Mauro', 128, undefined,'Bom') */

 const SteveJobsBiografia = new Livro({ 
  nome: "A biografia de Steve Jobs",
  autor: "Walter Isaacson",
  numeroPaginas: 607,
  loja: "Deus" // Não funciona
})

const MeuPeDeLaranjaLima = new Livro({
  avaliacao: "Bom",
  numeroPaginas: 128,
  autor: "José Mauro",
  nome: "Meu pé de laranja lima",
  marcador: true
}) 

MeuPeDeLaranjaLima.loja = "Bertrand"

console.log(SteveJobsBiografia.loja) // Fnac

MeuPeDeLaranjaLima.mostrarRequesitos()
Livro.prototype.mostrarRequesitos.call(MeuPeDeLaranjaLima)
SteveJobsBiografia.mostrarRequesitos()

SteveJobsBiografia.avaliacao = 'Muito bom'

console.log(SteveJobsBiografia.numeroPaginas)
console.log(MeuPeDeLaranjaLima.avaliacao)
console.log(MeuPeDeLaranjaLima.marcador)
// console.log(SteveJobsBiografia.avaliacao)

Livro.prototype.paginas = function () {
  console.log(`O número de páginas é de ${this.numeroPaginas}`)
}


MeuPeDeLaranjaLima.paginas()

console.log(SteveJobsBiografia.hasOwnProperty('nome')) // propriedade do objeto
console.log(MeuPeDeLaranjaLima.hasOwnProperty('avaliacao'))
console.log(SteveJobsBiografia.hasOwnProperty('loja'))

console.log(Object.getPrototypeOf(SteveJobsBiografia) === Livro.prototype)
console.log(Object.getPrototypeOf(Livro.prototype) === Object.prototype)
console.log(SteveJobsBiografia.dinheiro)


// propriedade própria -> propriedade do protótipo -> propriedade do objeto -> null (undefined)
