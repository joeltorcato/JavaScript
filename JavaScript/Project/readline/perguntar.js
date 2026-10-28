const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function perguntar(mensagem) {
  return new Promise((resolve) => { // A promise represents an operation that will finish in the future - the future is the user's answer
    rl.question(mensagem, (resposta) => { // // resposta is a call back, this function will be executed later, after the user wnters a response
      resolve(resposta); // the question has been answered successfully. deliver this answer to the code waiting for the promise
    });
  });
}

/* resolve is a function supplied automatically by JavaScript
resolve means: the asncy operation succeeded. here is its result
from promise -> peding to promise fulfilled
*/

function fecharInterface() {
  rl.close()
}

module.exports = {
  perguntar,
  fecharInterface
};