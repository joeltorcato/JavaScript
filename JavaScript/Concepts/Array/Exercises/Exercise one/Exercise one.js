const { perguntar, fecharInterface } = require('./readline/perguntar');

const livros = ['Dune', '1984', 'Dune', 'Clean Code'];

async function remove() {
  const resposta = await perguntar(
    'Insira o nome do livro que deseja remover: ',
  );
  let index = livros.indexOf(resposta, 0);

  for (const livro of livros) {
    if (livro === resposta) {
      livros.splice(index, 1);
    }
  }
  console.log(`\nO livro ${resposta} foi encontrado`);
  console.log(livros, '\n');
  fecharInterface();
}

remove();
