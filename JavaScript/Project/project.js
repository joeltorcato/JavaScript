let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Livro
function livro({titulo, autor, numeroPaginas, avaliacao}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao
}

// Livro físico
function livroFisico({titulo, autor, numeroPaginas, avaliacao}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    avaliacao // Just when the user finish the book
  })
}

// Establish the inheritance (relationship)
livroFisico.prototype = Object.create(livro.prototype)
livroFisico.prototype.constructor = livro

// Livro digital
function livroDigital({titulo, autor, numeroPaginas, avaliacao, formato}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
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
  formato: "PDF"
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

async function adicionarLivro() {
  const tipo = await perguntar("1- Digital | 2- Físico: ")
  const titulo = await perguntar("Título: ")
  const autor = await perguntar("Autor: ")
  const numeroPaginas = await perguntar("Número de páginas: ")

  let livro
  
  if (tipo == 1) {
    const formato = await perguntar("Formato: ")
    livro = new livroDigital ({
      titulo,
      autor,
      numeroPaginas,
      formato
    })
  } else if (tipo == 2) {
    livro = new livroFisico ({
      titulo,
      autor,
      numeroPaginas
    })
  } else {
    console.log("Insira um valor válido.")
    rl.close()
  }
  console.log(livro)

  rl.close()
}

async function interactiveTerminal() {
  const resposta = await perguntar("1- Adicionar um livro \n2- Escolher livro \n\nResposta: ")

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
  console.log(`\n${this.titulo}\n`)

  rl.close()
}