// IEEE 754-2008   precisão dos numeros em JS

let num1 = 25;
let num2 = 10;
let num3 = 18.454564654

// console.log(num1.toString() + num2); // Convertendo temporariamente para string
// num1 = num1.toString(); // Convertendo o valor
// console.log(typeof num1)

// console.log(num1.toString(2)); // Transforma em binario os numeros
// console.log(num3.toFixed(2)); // Numeros de casas decimais
// console.log(Number.isInteger(num3)); // Retorna se o valor e enteiro ou não
// console.log(Number.isInteger(num2)); // false ou true

let temp = num1 * 'erro';
console.log("Verifica se e NaN:",Number.isNaN(temp)); // Verifica se e NaN