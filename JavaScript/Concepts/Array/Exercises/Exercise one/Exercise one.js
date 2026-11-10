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

async function remove() {
  const resposta = await perguntar(
    'Insira o nome do livro que deseja remover: ',
  );
  let index = livros.indexOf(resposta, 0);

  if (livros[index] === resposta) {
    livros.splice(index, 1);
    console.log(`\nO livro ${resposta} foi removido com sucesso.\n`);
    mostrarLivros();
    fecharInterface();
  } else {
    console.log('\nO livro não foi encontrado\n');
    mostrarLivros();
    fecharInterface();
  }
}

remove();
