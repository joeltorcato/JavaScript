
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
  avaliacao: "Bom",
})

const confissoes = new Livro ({
  titulo: "Confissões",
  autor: "Lev Tolstói",
  numeroPaginas: 187,
  avaliacao: "Bom"
})

Livro.prototype.editora = "Leya"
twistedLove.editora = "Bertrand"

Livro.prototype.mostrarInformacoes = function () {
  console.log(`O título é ${this.titulo}, o autor é ${this.autor} contém ${this.numeroPaginas} páginas, a avaliação é de "${this.avaliacao}" e a editora é ${this.editora}`)
}

steveJobsBiografia.mostrarInformacoes()
twistedLove.mostrarInformacoes()
confissoes.mostrarInformacoes()

console.log(twistedLove.hasOwnProperty('editora')) // true
console.log(steveJobsBiografia.hasOwnProperty('editora')) // false
