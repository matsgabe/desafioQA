/* Implemente um programa que receba um valor monetário inteiro e retorne a quantidade
mínima de notas e moedas necessárias para compor esse valor. O programa deve sempre
priorizar as notas de maior valor primeiro.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularNotasEMoedas(valor) {
  const notasEMoedas = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.1, 0.05, 0.01];
  const resultado = {};

  for (let nota of notasEMoedas) {
    if (valor >= nota) {
      resultado[nota] = Math.floor(valor / nota);
      valor = (valor % nota).toFixed(2);
    }
  }

  return resultado;
}

rl.question("Digite o valor a ser sacado: ", (input) => {
  const valor = parseFloat(input);

  if (!isNaN(valor) && valor > 0) {
    const resultado = calcularNotasEMoedas(valor);
    for (let [nota, quantidade] of Object.entries(resultado)) {
      if (quantidade > 0) {
        console.log(
          `${quantidade} ${nota >= 1 ? "nota(s)" : "moeda(s)"} de R$ ${nota}`
        );
      }
    }
  } else {
    console.log("Por favor, insira um valor válido.");
  }

  rl.close();
});
