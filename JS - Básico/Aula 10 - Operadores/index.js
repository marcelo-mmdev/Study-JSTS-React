/**
 * Operadores Aritméticos 
 *  + adição ou concatenação
 *  - / * memos, dividir e mltiplicação
 *  % resto da divisão
 *  ** Potenciação
 */

const num1 = 10;
const num2 = 8;
const num3 = 5;

console.log(num1 + num2)
console.log('------------------------------------------------')

/**
 
 * Precedencia
 * 1 ()
 * 2 **
 * 3 * / %
 * 4 + -

*/

/**
 * Incremento ++
 * Decremento --
 */

let contador = 1;
contador++;
contador++;
contador++;
console.log(contador)
console.log('------------------------------------------------')

let contador1 = 10;
console.log(contador1--); // Ele primeiro faz a ação, nno caso aqui contador1 já tem o valor de 2
console.log(contador1);
console.log('------------------------------------------------')

let contador2 = 1;
console.log(++contador2); // Ele primeiro colocar 1 e depois faz a ação, no caso o valor já é 2
console.log(contador2);
console.log('------------------------------------------------')

const passo = 2;
let contador3 = 0;
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
contador3 = contador3 + passo;
console.log(contador3);
console.log('------------------------------------------------')

let contador4 = 2;
contador4 += 2; // OBS: posso usar qualqer operador -= **=
contador4 += 2;
contador4 += 2;
console.log(contador4)
console.log('------------------------------------------------')

// NaN significa Not a Number
const num4 = 10;
const num5 = 'Mar';
console.log(num4 * num5)
console.log('------------------------------------------------')

// Tratando erro de string para number 
const num6 = 10;
const num7 = parseInt('5');// posso usar parseFloat(para decimais) e Number(Para todos tipo numericos)
console.log(num6 * num7)
console.log('------------------------------------------------')