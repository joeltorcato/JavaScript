function livro({ titulo, autor, numeroPaginas, idioma, paginas = [] }) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.idioma = idioma;
  this.paginas = paginas;
}

function livroFisico({
  titulo,
  autor,
  numeroPaginas,
  idioma,
  avaliacao,
  paginas = [],
}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    idioma,
    avaliacao,
    paginas,
  });
}

livroFisico.prototype = Object.create(livro.prototype);
livroFisico.prototype.constructor = livroFisico;

function livroDigital({
  titulo,
  autor,
  numeroPaginas,
  idioma,
  avaliacao,
  paginas,
}) {
  livro.call(this, {
    titulo,
    autor,
    numeroPaginas,
    idioma,
    avaliacao,
    paginas,
  });
  this.avaliacao = avaliacao;
}

livroDigital.prototype = Object.create(livro.prototype);
livroDigital.prototype.constructor = livroDigital;

module.exports = {
  livro,
  livroFisico,
  livroDigital,
};
