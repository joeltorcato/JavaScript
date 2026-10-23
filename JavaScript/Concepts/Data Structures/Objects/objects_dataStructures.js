const person = {
  firstName: 'Joel',
  lastName: 'Fernandes',
  age: 16,
  hobbies: 'Chess',
  hiPerson() {
    console.log('Hi, I am ' + this.firstName);
  },
};
person.hiPerson()

delete person.lastName;
console.log(person);

person.middleName = 'Pedro'
console.log(person);

let nome; // criar a variável fora do objeto

const livro = { // livro = objeto 
  nome: 'A biografia de Steve jobs', // nome = chave, A biografia de steve jobs = valor
  autor: 'Walter Isaacson', 
  numeroPaginas: 607,
  nomeAutor () {
    console.log(this.nome + ' - ' + this.autor) // this.nome = livro.nome
  }
}
Object.freeze(livro) // não deixa mudar valores dentro do objeto

livro.nome = 'O meu pé de laranja lima'

console.log(livro['nome']) // quando é uma variável -> quando preciso reutilizar ou quando não é fixo
console.log(livro.nome)
livro.nomeAutor()

// o objeto é melhor porque mantém esses dados organizados e deixa claro que pertencem ao mesmo livro.
// variáveis são dados/valores soltos - isolados

/* objetos úteis para - representar entidades, agrupar configurações, 
passar vários valores para um função, associar comportamentos aos dados */
// pode haver objetos dentro do objetos, arrays

let capitulos

const segundoLivro = {
  nome: 'O meu pé de laranja lima',
  capitulos: {
    inicial: 'A história',
    final: 'O fim'
  }
}

console.log(segundoLivro.capitulos.inicial)
console.log(segundoLivro['capitulos'].final) // tipo subcamadas
console.log(segundoLivro['capitulos']['final']) // caso final seja uma variável

function showUser(user) { // user = parâmetro (= variável temperária)
  console.log(user.name)
  console.log(user.email)
}

showUser({ // objetvo dentro de uma função
  name: 'Joel',
  email: 'joeltorcato@gmail.com'
})

const linguagensProgramação = {
  linguagens: ['Javascript', 'Java', 'Rust', 'GO']
}

console.log(linguagensProgramação.linguagens[1])