/* Crie um programa que, dado um número inteiro n, retorne os primeiros n números da
sequência de Fibonacci. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function fibonacci(n) {
  let a = 0,
    b = 1,
    sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}

rl.question("Digite um número inteiro: ", (input) => {
  const n = parseInt(input);
  if (n > 0) {
    console.log(fibonacci(n));
  } else {
    console.log("Por favor, insira um número válido maior que zero.");
  }
  rl.close();
});
