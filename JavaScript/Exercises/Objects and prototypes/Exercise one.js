function Livro({ titulo, autor, numeroPaginas, avaliacao }) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao;
}

const steveJobsBiografia = new Livro({
  titulo: 'A biografia de Steve Jobs',
  autor: 'Walter Isaacson',
  numeroPaginas: 607,
  avaliacao: 'Muito bom',
});

const twistedLove = new Livro({
  titulo: 'TwistedLove',
  autor: 'Anna Hung',
  numeroPaginas: 295,
  avaliacao: 'Bom',
});

const confissoes = new Livro({
  titulo: 'Confissões',
  autor: 'Lev Tolstói',
  numeroPaginas: 187,
  avaliacao: 'Bom',
});

console.log(steveJobsBiografia);
console.log(twistedLove);
console.log(confissoes);

console.log(steveJobsBiografia.hasOwnProperty('titulo'));
console.log(twistedLove.hasOwnProperty('autor'));
console.log(confissoes.hasOwnProperty('numeroPaginas'));
console.log(steveJobsBiografia.hasOwnProperty('avaliacao'));
