const { perguntar, fecharInterface } = require('./readline/perguntar');

const livros = ['Dune', '1984', 'Dune', 'Clean Code'];

async function remove() {
  const resposta = await perguntar(
    'Insira o nome do livro que deseja remover: ',
  );

  const index = livros.indexOf(resposta, 0);

  if (livros === resposta) {
    livros.splice(index, 1);
  } else {
    console.log('O livro não foi encontrado');
    fecharInterface();
  }
  console.log(`O livro ${resposta} foi encontrado`);
  console.log(livros);
  fecharInterface();
}

remove();
