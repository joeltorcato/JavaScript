let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Livro({nome}) {
  this.nome = nome;
}

function nomeLivro() {
  rl.question ('Nome do livro: ', (resposta) => {
    Livro.nome = resposta

    Mostrarnome()
  })
}

nomeLivro()

function Mostrarnome() {
  console.log(`O nome do livro é ${Livro.nome}`)
  rl.close()
}





