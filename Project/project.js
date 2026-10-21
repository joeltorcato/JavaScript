let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let livro;
let pagina;
const agora = new Date()
const horasMinutos = agora.toLocaleTimeString('pt-PT', {
  hour: '2-digit',
  minute: '2-digit'
}) // criar quando o usurário inserir as páginas

 rl.question  ('Livro: ', (resposta) => {
  livro = resposta

  novaPagina()
})

function novaPagina() {
  rl.question ('Diga a página que está: ', (resposta) =>  {
    pagina = resposta
    
    mostrarDados()
  }) 
}

function mostrarDados() {
  console.log(`O livro é ${livro} e a página é ${pagina}`)
  console.log(horasMinutos)
  rl.close()
}

