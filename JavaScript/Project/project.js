const { perguntar, fecharInterface } = require('./readline/perguntar');

const createInteractiveTerminal = require('./functions/interactiveTerminal');

const createAdicionarLivro = require('./functions/adicionarLivro');

const createEscolherLivro = require('./functions/escolherLivro');

const createAdicionarPagina = require('./functions/adicionarPagina');

const { livroDigital, livroFisico } = require('./users/livros');

const { SteveJobsBiografia, MeuPeDeLaranjaLima } = require('./users/users');

const livros = [SteveJobsBiografia, MeuPeDeLaranjaLima];

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
  interactiveTerminal: () => interactiveTerminal(),
  adicionarLivro,
  irParaEscolherLivro: () => escolherLivro(),
  fecharInterface,
});

escolherLivro = createEscolherLivro({
  interactiveTerminal: () => interactiveTerminal(),
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

/* Study to gain a deep understanding of import and export processes, as well 
as how each line functions and the rationale behinf it. 
Execute import and export operations for all functions and users */

/* Version two 

Interactive selection prompt
Deleta the last iteration 
Choose the book by the number (escolherLivro()) */
