function soma(x, y){
    const resultado = x + y;
    return resultado;
};
////////////////////////////////////////////////////
function somaLegal(x = 1, y = 1){
    // ele só manda esse valor de x e y
    // se não passar não nada na execução
    const resultado = x + y;
    return resultado;
};

console.log(somaLegal());

console.log(somaLegal(1, 2))

////////////////////////////////////////////////////
console.log(soma(5, 5));
console.log(soma(15, 25));
console.log(soma(2, 5));

const resultado = soma(8, 8);
console.log(soma());
console.log(resultado);

const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));

const raizes = (z) => {
    return z ** 0.5;
};
console.log(raizes(16));
console.log(raizes(25));