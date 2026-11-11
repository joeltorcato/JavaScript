const { perguntar, fecharInterface } = require('./readline/perguntar');

const livros = ['Dune', '1984', 'Dune', 'Clean Code'];

function mostrarLivros() {
  let numero = 1;

  console.log('Livros existentes: ');

  for (const livro of livros) {
    console.log(`${numero++} - ${livro}`);
  }
  console.log('\n');
}

async function perguntarUsuario() {
  const resposta = await perguntar(
    'Insira o nome do livro que deseja remover: ',
  );
  remove(resposta);
}

function remove(nomeLivro) {
  let index = livros.indexOf(nomeLivro, 0);

  if (livros[index] === nomeLivro) {
    livros.splice(index, 1);
    console.log(`\nO livro ${nomeLivro} foi removido com sucesso.\n`);
    mostrarLivros();
    fecharInterface();
  } else {
    console.log('\nO livro não foi encontrado\n');
    mostrarLivros();
    fecharInterface();
  }
}

perguntarUsuario();
