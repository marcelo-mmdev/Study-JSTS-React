exibirNumerosPrimos();

function exibirNumerosPrimos() {
  for (let numero = 1; numero <= 1000; numero++) {
    if (NumerosPrimo(numero)) console.log(numero);
  }
}

function NumerosPrimo(numero) {
  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }
  return true;
}
const main = (params) => {
  // Code here
};
