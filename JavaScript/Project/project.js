const { perguntar, fecharInterface } = require('./readline/perguntar');

const createInteractiveTerminal = require('./functions/interactiveTerminal');

const createAdicionarLivro = require('./functions/adicionarLivro');

const createEscolherLivro = require('./functions/escolherLivro');

const createAdicionarPagina = require('./functions/adicionarPagina');

// Livro
function livro({
  titulo,
  autor,
  numeroPaginas,
  avaliacao,
  idioma,
  paginas = [],
}) {
  this.titulo = titulo;
  this.autor = autor;
  this.numeroPaginas = numeroPaginas;
  this.avaliacao = avaliacao;
  this.idioma = idioma;
  this.paginas = paginas;
}

// Livro físico
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
    avaliacao, // Just when the user finish the book
    paginas,
  });
}

// Establish the inheritance (relationship)
livroFisico.prototype = Object.create(livro.prototype);
livroFisico.prototype.constructor = livroFisico;

// Livro digital
function livroDigital({
  titulo,
  autor,
  numeroPaginas,
  idioma,
  avaliacao,
  formato,
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
  this.formato = formato;
}

// Establish the inheritance (relationship)
livroDigital.prototype = Object.create(livro.prototype);
livroDigital.prototype.constructor = livroDigital;

const SteveJobsBiografia = new livroDigital({
  titulo: 'A biografia de Steve Jobs',
  autor: 'Walter Isaacson',
  numeroPaginas: 607,
  idioma: 'English',
  formato: 'PDF',
  paginas: [10, 20],
});

const MeuPeDeLaranjaLima = new livroFisico({
  titulo: 'Meu pé de laranja lima',
  autor: 'José Mauro de Vasconcelos',
  numeroPaginas: 128,
  idioma: 'Português',
});

const livros = [];
livros.push(SteveJobsBiografia);
livros.push(MeuPeDeLaranjaLima);

let interactiveTerminal;
let escolherLivro;

const adicionarLivro = createAdicionarLivro({
  perguntar,
  interactiveTerminal: () => interactiveTerminal(),
  fecharInterface,
  livroDigital,
  livroFisico,
  livros,
});

const adicionarPagina = createAdicionarPagina({
  perguntar,
  interactiveTerminal,
  adicionarLivro,
  isParaEscolherLivro: () => escolherLivro(),
  fecharInterface,
});

escolherLivro = createEscolherLivro({
  interactiveTerminal,
  perguntar,
  adicionarPagina,
  livros,
});

interactiveTerminal = createInteractiveTerminal({
  perguntar,
  adicionarLivro,
  escolherLivro,
});

interactiveTerminal();

/* 29 -> Study to gain a deep understanding of import and export processes, as well 
as how each line functions and the rationale behinf it. 
Execute import and export operations for all functions and users */

/* Version two 

Interactive selection prompt
Deleta the last iteration 
Choose the book by the number (escolherLivro()) */
