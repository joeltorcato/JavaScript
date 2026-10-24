let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function livro({titulo, autor, numeroPaginas, avaliacao}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao
}

function livroFisico({titulo, autor, numeroPaginas, avaliacao}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    avaliacao
  })
}

livroFisico.prototype = Object.create(livro.prototype)
livroFisico.prototype.constructor = livro

function livroDigital({titulo, autor, numeroPaginas, avaliacao, formato}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    avaliacao
  })
  this.formato = formato;
}

livroDigital.prototype = Object.create(livro.prototype)
livroDigital.prototype.constructor = livro

// Estudar a function perguntar
function perguntar(mensagem) {
  return new Promise((resolve) => {
    rl.question(mensagem, (resposta) => {
    resolve(resposta)
  })
  })
}

// Estudar como funciona o async e o await
async function criarLivro() {
  const tipo = await perguntar("1 - Digital | 2 - Físico: ")
  const titulo = await perguntar("Título: ")
  const autor = await perguntar("Autor: ")
  const numeroPaginas = await perguntar("Número de páginas: ")

  let livro
  
  if (tipo == 1) {
    livro = new livroDigital ({
      titulo,
      autor,
      numeroPaginas
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

criarLivro()

// Nova funcionalidade - pedir o formato para dispositivos digitais





