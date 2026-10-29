const { perguntar, fecharInterface } = require('./readline/perguntar');

const createInteractiveTerminal = require('./functions/interactiveTerminal');

const createAdicionarLivro = require('./functions/adicionarLivro');
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

const adicionarLivro = createAdicionarLivro({
  perguntar,
  interactiveTerminal: () => interactiveTerminal(),
  fecharInterface,
  livroDigital,
  livroFisico,
  livros,
});

interactiveTerminal = createInteractiveTerminal({
  perguntar,
  adicionarLivro,
  escolherLivro,
});

interactiveTerminal();

async function escolherLivro() {
  let i = 1;

  if (livros.length === 0) {
    console.log('\nNão existem livro');
    interactiveTerminal();
  } else {
    console.log(`\nLivros existentes - ${livros.length}\n`);
    for (const livro of livros) {
      // Study better
      console.log(`${i++} - ${livro.titulo}`);
    }
  }
  const resposta = await perguntar('\nResposta (Insira o nome do livro): ');

  const livro = livros.find((livro) => {
    return livro.titulo === resposta;
  });
  if (livro === undefined) {
    console.log('\nInsira um valor válido.\n');
    interactiveTerminal();
  }
  adicionarPagina(livro);
}

async function adicionarPagina(livro) {
  if (livro.paginas.length > 0) {
    console.log('\nAs suas últimas páginas\n');
    for (let i = 0; i < livro.paginas.length; i++) {
      console.log(`Página ${livro.paginas[i]}`);
    }
  } else {
    console.log('\nO livro ainda não contém nenhuma página inserida\n');
  }

  const resposta = await perguntar('\nInsira a página em que ficou: ');

  if (resposta) {
    livro.paginas.push(resposta);
    console.log(
      `\nAcabou de adicionar a página ${resposta} ao livro ${livro.titulo}`,
    );

    console.log('\nQuer ir para onde?\n');
    console.log(
      '1 - Menu\n2 - Adicionar um livro\n3 - Escolher livro\n4 - Sair\n',
    );
    const resultado = await perguntar('Resposta: ');

    if (resultado == 1) {
      interactiveTerminal();
    } else if (resultado == 2) {
      adicionarLivro();
    } else if (resultado == 3) {
      escolherLivro();
    } else if (resultado == 4) {
      fecharInterface();
    } else {
      console.log('\nComo não inseriu um valor válido irá sair do programa.\n');
      fecharInterface();
    }
  } else {
    console.log('\nInsira uma página válida.');
    interactiveTerminal();
  }
}

/* 29 -> Study to gain a deep understanding of import and export processes, as well 
as how each line functions and the rationale behinf it. 
Execute import and export operations for all functions and users */

/* Version two 

Interactive selection prompt
Deleta the last iteration 
Choose the book by the number (escolherLivro()) */
