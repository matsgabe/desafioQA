/* Implemente um programa que, dada uma string, encontre a maior substring palindrômica
dentro dela.
*/

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function substringPalindromica(s) {
  let maiorPalindromo = "";

  function expandirCentro(esquerda, direita) {
    while (esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]) {
      esquerda--;
      direita++;
    }
    return s.slice(esquerda + 1, direita);
  }

  for (let i = 0; i < s.length; i++) {
    const palindromo1 = expandirCentro(i, i);
    const palindromo2 = expandirCentro(i, i + 1);

    if (palindromo1.length > maiorPalindromo.length) {
      maiorPalindromo = palindromo1;
    }
    if (palindromo2.length > maiorPalindromo.length) {
      maiorPalindromo = palindromo2;
    }
  }
  return maiorPalindromo;
}

r1.question("digite uma string: ", (input) => {
  const resultado = substringPalindromica(input);
  console.log(`maior substring palindromica: "${resultado}"`);
  r1.close();
});
