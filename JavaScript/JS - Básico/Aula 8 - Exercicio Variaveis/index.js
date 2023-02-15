/*   Exercício

Manoel Marcelo Rodrigues tem 35 anos, pesa 90Kg
tem 1.75 de altura e seu IMC é de 25.595959
Manoel Marcelo nasceu em 1987
*/

const nome = 'Manoel Marcelo';
const sobrenome = 'Rodrigues';
const idade = 35;
const peso = 90;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;

console.log(nome, sobrenome,'tem',idade, 'anos, pesa',peso, 'Kg e tem', altura)
console.log(`de ${altura} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`) 
// Usando template strings forma mais moderno de escrever string