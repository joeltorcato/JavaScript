let readline = require('readline')

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let valorFormato

function escolherTipoLivro() {
  rl.question ('1- Digital \n2- Físico\n\nResposta:  ', (resposta) => {
    valorFormato = resposta

    escolha()
  })
}

escolherTipoLivro()



function livroFisico({titulo, autor, numeroPaginas, avaliacao}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao
}

function livroDigital({titulo, autor, numeroPaginas, avaliacao, formato}) {
  LivroFisico.call(this, {
    titulo,
    autor,
    numeroPaginas,
    avaliacao
  })
  this.formato = formato;
}

const meuPeDeLaranjaLima = new livroFisico ({
  titulo: "Meu pé de laranja lima",
  autor: "José Mauro de Vasconcelos",
  numeroPaginas: 128,
  avaliacao: "Bom"
})

function escolha() {
  if (valorFormato == 1) {
    console.log("O livro é digital")
  } else if (valorFormato == 2) {
    console.log("O livro é físico")
  } else {
    console.log("Insira um valor válido")
  }

  rl.close()
}

