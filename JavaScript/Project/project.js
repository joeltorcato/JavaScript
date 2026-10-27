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
  // Current page (array)
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

const livros = []
// livros.push(SteveJobsBiografia)
// livros.push(MeuPeDeLaranjaLima)

async function interactiveTerminal() {
  const resposta = await perguntar("\nMenu interativo \n\n1- Adicionar um livro \n2- Escolher livro \n\nResposta: ")

  if (resposta == 1) {
    adicionarLivro()
  } else if (resposta == 2) {
    escolherLivro()
  } else {
    console.log("Insira um valor válido\n")
    interactiveTerminal()
  }
}

interactiveTerminal()

async function adicionarLivro() {
  const tipo = await perguntar("\n1- Digital ou 2- Físico: ")
  
  if (tipo == 1 || tipo.toLowerCase() == "digital") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    const idioma = await perguntar("Idioma: ")
    const formato = await perguntar("Formato: ")
    const livro = new livroDigital ({
      titulo,
      autor,
      numeroPaginas,
      idioma,
      formato
    })
    livros.push(livro)
    console.log(`\nO livro digital "${livro.titulo}" foi criado com sucesso!\n`)
    interactiveTerminal()
  } else if (tipo == 2 || tipo.toLowerCase() == "físico") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    const idioma = await perguntar("Idioma: ")
    const livro = new livroFisico ({
      titulo,
      autor,
      numeroPaginas,
      idioma
    })
    livros.push(livro)
     console.log(`\nO livro físico "${livro.titulo}" foi criado com sucesso!\n`)
     interactiveTerminal()
  } else {
    console.log("Insira um valor válido.")
    rl.close()
  }
}

async function escolherLivro() {
  let i = 1;

  if (livros.length === 0) {
    console.log("\nNão existem livro")
    interactiveTerminal()
  } else {  
    console.log(`\nLivros existentes - ${livros.length}\n`)
        for (const livro of livros) { // Study better
          console.log(`${i++} - ${livro.titulo}`)
  }
    const resposta = await perguntar("\nResposta: ")
  }
}

// Interactive selection prompt
// Deleta the last iteration