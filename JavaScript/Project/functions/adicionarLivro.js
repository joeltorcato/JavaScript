function createAdicionarLivro({
  perguntar,
  interactiveTerminal,
  livros,
  livroDigital,
  livroFisico,
  fecharInterface
}) {
  return async function adicionarLivro() {
  const tipo = await perguntar("\n1- Digital ou 2- Físico: ")
  
  if (tipo == 1 || tipo.toLowerCase() == "digital") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    const idioma = await perguntar("Idioma: ")
    const formato = await perguntar("Formato: ")
    const livro = new livroDigital ({
      titulo,
      autor,
      numeroPaginas,
      idioma,
      formato
    })
    livros.push(livro)
    console.log(`\nO livro digital "${livro.titulo}" foi criado com sucesso!\n`)
    await interactiveTerminal()
  } else if (tipo == 2 || tipo.toLowerCase() == "físico") {
    const titulo = await perguntar("Título: ")
    const autor = await perguntar("Autor: ")
    const numeroPaginas = await perguntar("Número de páginas: ")
    const idioma = await perguntar("Idioma: ")
    const livro = new livroFisico ({
      titulo,
      autor,
      numeroPaginas,
      idioma
    })
    livros.push(livro)
     console.log(`\nO livro físico "${livro.titulo}" foi criado com sucesso!\n`)
     await interactiveTerminal()
  } else {
    console.log("\nInsira um valor válido.\n")
    fecharInterface()
  }
}
}

module.exports = createAdicionarLivro;
