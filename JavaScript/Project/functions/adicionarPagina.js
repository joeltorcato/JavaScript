function createAdicionarPagina({
  perguntar,
  interactiveTerminal,
  adicionarLivro,
  isParaEscolherLivro,
  fecharInterface,
}) {
  return async function adicionarPagina(livro) {
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
        isParaEscolherLivro();
      } else if (resultado == 4) {
        fecharInterface();
      } else {
        console.log(
          '\nComo não inseriu um valor válido irá sair do programa.\n',
        );
        fecharInterface();
      }
    } else {
      console.log('\nInsira uma página válida.');
      interactiveTerminal();
    }
  };
}

module.exports = createAdicionarPagina;
