/* Um número perfeito é um número inteiro positivo que é igual à soma de todos os seus
divisores positivos, excluindo ele mesmo. Implemente um programa que verifique se um
número dado é perfeito.
*/

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numeroPerfeito(n) {
  if (n <= 1) return false;

  let soma = 0;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      soma += i;
    }
  }

  return soma;
}

r1.question("digite um numero inteiro: ", (input) => {
  const n = parseInt(input);

  if (!isNaN(n)) {
    const resultado = numeroPerfeito(n);
    console.log(resultado ? "True" : "False");
  } else {
    console.log("por favor, insira um numero valido");
  }

  r1.close();
});
