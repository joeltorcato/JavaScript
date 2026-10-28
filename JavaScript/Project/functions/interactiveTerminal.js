function createInteractiveTerminal({
  perguntar,
  adicionarLivro,
  escolherLivro
}) {
  return async function interactiveTerminal() {
  const resposta = await perguntar("\nMenu interativo \n\n1- Adicionar um livro \n2- Escolher livro \n\nResposta: ")

  if (resposta == 1) {
    await adicionarLivro()
  } else if (resposta == 2) {
    await escolherLivro()
  } else {
    console.log("Insira um valor válido\n")
    await interactiveTerminal()
  }
};
}

module.exports = createInteractiveTerminal;