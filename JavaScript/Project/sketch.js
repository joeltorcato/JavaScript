let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Livro
function livro({titulo, autor, numeroPaginas, avaliacao, idioma}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao;
  this.idioma = idioma
}

// Livro físico
function livroFisico({titulo, autor, numeroPaginas, idioma, avaliacao}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    idioma,
    avaliacao // Just when the user finish the book
  })
}

// Establish the inheritance (relationship)
livroFisico.prototype = Object.create(livro.prototype)
livroFisico.prototype.constructor = livro

// Livro digital
function livroDigital({titulo, autor, numeroPaginas, idioma, avaliacao, formato}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    idioma,
    avaliacao
  })
  this.formato = formato;
}

// Establish the inheritance (relationship)
livroDigital.prototype = Object.create(livro.prototype)
livroDigital.prototype.constructor = livro

const SteveJobsBiografia = new livroDigital({
  titulo: "A biografia de Steve Jobs",
  autor: "Walter Isaacson",
  numeroPaginas: 607,
  idioma: "English",
  formato: "PDF"
})

const MeuPeDeLaranjaLima = new livroFisico({
  titulo: "Meu pé de laranja lima",
  autor: "José Mauro de Vasconcelos",
  numeroPaginas: 128,
  idioma: "Português"
})

function perguntar(mensagem) {
  return new Promise((resolve) => { // A promise represents an operation that will finish in the future - the future is the user's answer
    rl.question(mensagem, (resposta) => { // resposta is a call back, this function will be executed later, after the user wnters a response
    resolve(resposta) // the question has been answered successfully. deliver this answer to the code waiting for the promise
  })
  })
}

/* resolve is a function supplied automatically by JavaScript
resolve means: the asncy operation succeeded. here is its result
from promise -> peding to promise fulfilled
*/

const books = []
books.push(SteveJobsBiografia)
books.push(MeuPeDeLaranjaLima)

async function adicionarLivro() {
  const tipo = await perguntar("\n1- Digital ou 2- Físico: ")
  
  if (tipo == 1 || tipo.toLowerCase() == "digital") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    const formato = await perguntar("Formato: ")
    livro = new livroDigital ({
      titulo,
      autor,
      numeroPaginas,
      formato
    })
    console.log("\nLivro digital criado com sucesso!\n")
    interactiveTerminal()
  } else if (tipo == 2 || tipo.toLowerCase() == "físico") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    livro = new livroFisico ({
      titulo,
      autor,
      numeroPaginas
    })
     console.log("\nLivro físico criado com sucesso!\n")
     interactiveTerminal()
  } else {
    console.log("Insira um valor válido.")
    rl.close()
  }
}

async function interactiveTerminal() {
  const resposta = await perguntar("\nMenu interativo \n\n1- Adicionar um livro \n2- Escolher livro \n\nResposta: ")

  if (resposta == 1) {
    adicionarLivro()
  } else if (resposta == 2) {
    escolherLivro()
  } else {
    console.log("Insira um valor válido\n")
  }
}

interactiveTerminal()

escolherLivro = function() {
  for (const book of books) {
    console.log(book.titulo) // undefined
  }
  console.log("\nNeste momento existem", books.length, "livros\n")
  const book = books.find((book) => // find returns the first object that satisfies a condition
  book.numeroPaginas <= 250) 
  console.log(book,"\n")
  // console.log(book.titulo, "tem", book.numeroPaginas, "\n") Returns an error if the number of pages is greater than that of any book

  const position = books.findIndex((book) => // findIndex returns the first index that satisfies a condition
  book.numeroPaginas >= 250)

  console.log("A posição do livro é", position, "\n")

  const booksWithManyPages = books.filter((book) => // Array containing all matching objects
  book.numeroPaginas >= 100)

  console.log(booksWithManyPages)

  books.splice(0, 2) // splice(start at index, remove 1 item)
  console.log(books) // Question: Is always the index that I want remove and 1 to remove

  const index = books.findIndex((book) => book.numeroPaginas >= 100)
  if (index !== -1) { // Question: If the index is difent from -1 (-1 means false)
    books.splice(index, 2) 
  }

  console.log(book)

  rl.close()
}