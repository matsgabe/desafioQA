/* Implemente um algoritmo de busca binária que, dado um número inteiro alvo e uma lista de
números inteiros ordenada de forma crescente, retorne o índice da primeira ocorrência do
número na lista. Caso o número não esteja presente, retorne -1.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buscaBinaria(lista, alvo) {
  let inicio = 0,
    fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (lista[meio] === alvo) return meio;
    if (lista[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }

  return -1;
}

rl.question("Digite uma lista ordenada (ex: 5,12,18,23): ", (listaInput) => {
  const lista = listaInput.split(",").map(Number);

  rl.question("Digite o número a buscar: ", (alvoInput) => {
    const alvo = parseInt(alvoInput);
    const indice = buscaBinaria(lista, alvo);
    console.log(indice !== -1 ? `Índice: ${indice}` : "Número não encontrado.");
    rl.close();
  });
});
