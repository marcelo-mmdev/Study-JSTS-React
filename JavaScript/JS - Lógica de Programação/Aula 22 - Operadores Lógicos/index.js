/**
 * Operadores Lógicos
 * 
 * &&   AND - Todas as expressões precisam ser verdadeiras
 * ||   OR  - Apenas uma das expressões precisa ser verdadeiras
 * !    Not - Inverte uma expressões
 * 
 */
const expressaoE  = true && true && false && true
console.log(true && true && true && true)
console.log("AND", expressaoE)

console.log("--------------------------------")

const expressaoOU  = true || true || false || true
console.log(true || true || true || true)
console.log(false || false || false || false)
console.log("OR", expressaoOU)

console.log("--------------------------------")

console.log(" ! ", true)
console.log("Negação 1", !true)

console.log("--------------------------------")

console.log(" ! ", false)
console.log("Negação 2", !false)

console.log("--------------------------------")
