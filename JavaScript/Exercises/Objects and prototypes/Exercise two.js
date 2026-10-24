
function Livro({titulo, autor, numeroPaginas, avaliacao}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao;
}

const steveJobsBiografia = new Livro ({
  titulo: "A biografia de Steve Jobs",
  autor: "Walter Isaacson",
  numeroPaginas: 607,
  avaliacao: "Muito bom"
})

const twistedLove = new Livro ({
  titulo: "TwistedLove",
  autor: "Anna Hung",
  numeroPaginas: 295,
})

const confissoes = new Livro ({
  titulo: "Confissões",
  autor: "Lev Tolstói",
  numeroPaginas: 187,
})

Livro.prototype.mostrarInformacoes = function() {
  console.log(`O titulo do livro é ${this.titulo}, o autor é ${this.autor} e contém ${this.numeroPaginas} páginas`)
}

Livro.prototype.temAvaliacao = function() {
  if (this.avaliacao === undefined) {
    console.log(false)
  } else {
    console.log(true)
  }
}

Livro.prototype.paginas = function () {
  if (this.numeroPaginas > 300) {
    console.log("O livro tem mais de 300 páginas")
    console.log(true)
  } else {
    console.log("O livro não tem mais de 300 páginas")
    console.log(false)
  }
}

steveJobsBiografia.mostrarInformacoes()
twistedLove.mostrarInformacoes()
confissoes.mostrarInformacoes()

steveJobsBiografia.temAvaliacao()
twistedLove.temAvaliacao()
confissoes.temAvaliacao()

steveJobsBiografia.paginas()
twistedLove.paginas()
confissoes.paginas()