function createEscolherLivro({
  interactiveTerminal,
  perguntar,
  adicionarPagina,
  livros,
}) {
  return async function escolherLivro() {
    let i = 1;

    if (livros.length === 0) {
      console.log('\nNão existem livro');
      await interactiveTerminal();
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
      await interactiveTerminal();
      return;
    }
    await adicionarPagina(livro);
  };
}

module.exports = createEscolherLivro;
