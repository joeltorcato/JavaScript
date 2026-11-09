function createAdicionarPagina({
  perguntar,
  interactiveTerminal,
  adicionarLivro,
  irParaEscolherLivro,
  fecharInterface,
}) {
  return async function adicionarPagina(livro) {
    if (livro.paginas.length > 0) {
      console.log(`\nAs suas últimas ${livro.paginas.length} páginas\n`);
      for (let i = 0; i < livro.paginas.length; i++) {
        console.log(`Página ${livro.paginas[i]}`);
      }
    } else {
      console.log('\nO livro ainda não contém nenhuma página inserida\n');
    }

    const resposta = Number(
      await perguntar('\nInsira a página em que ficou: '),
    );

    let ultimaPagina = livro.paginas[livro.paginas.length - 1];

    async function menu() {
      console.log(
        `\nAcabou de adicionar a página ${resposta} ao livro ${livro.titulo}`,
      );

      console.log('\nQuer ir para onde?\n');
      console.log(
        '1 - Menu\n2 - Adicionar um livro\n3 - Escolher livro\n4 - Sair\n',
      );
      const resultado = Number((await perguntar('Resposta: ')).trim()); // .trim() -> Remove space

      if (resultado === 1) {
        await interactiveTerminal();
      } else if (resultado === 2) {
        await adicionarLivro();
      } else if (resultado === 3) {
        await irParaEscolherLivro();
      } else if (resultado === 4) {
        await fecharInterface();
      } else {
        console.log(
          '\nComo não inseriu um valor válido irá sair do programa.\n',
        );
        fecharInterface();
      }
    }

    if (
      !isNaN(resposta) &&
      livro.paginas.length >= 7 &&
      ultimaPagina <= resposta
    ) {
      livro.paginas.push(resposta);
      livro.paginas.shift();
      await menu();
    } else if (!isNaN(resposta) && ultimaPagina <= resposta) {
      livro.paginas.push(resposta);
      await menu();
    } else if (!isNaN(resposta) && livro.paginas.length == 0) {
      livro.paginas.push(resposta);
      await menu();
    } else {
      console.log('\nInsira uma página válida.');
      await interactiveTerminal();
    }
  };
}

module.exports = createAdicionarPagina;
