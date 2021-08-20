const nome = 'Marcelo Rodrigues'
//alert(nome)

let pessoa = {
    nome: 'Marcelo',
    idade: 33,
    altura: 1.75,
    peso: 84

};

console.log(pessoa);

// Arrays

let familia = [true, 45, 'Marcelo', 18];
console.log(familia.length);
console.log(familia[2]);

// Verbo + Substantivo

let corSite = "Azul";

function resetaCor(cor){
    corSite = cor;
};

console.log(corSite);
resetaCor("Vermelho");
console.log(corSite);

// Existe dois tipos de funções
// A primeira realiza uma tarefa, não devolve nada 

function dizerNome(){
    console.log('Marcelo');
}

// A segunda faz um cálculo ou operação e retorna algo

function multiplicaPorDois(valor){
    return valor * 2;
}

console.log(multiplicaPorDois(5));

let resultado = multiplicaPorDois(9);
console.log(resultado);

// Operadores Aritiméticos
let salario = 100;
// +, -, *, /, **,
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ e o --

let idade = 18;

console.log(--idade);
console.log(idade++);
console.log(idade)

// Operadores de Atribuição

let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

// No javaScript tem dois tipos de Igualdade
// boas praticas e sempre usar comparação com ===
// Igualdade restrita
// compara valor e tipo
console.log( 1 === 1);
// compara valor e tipo. obs: na proxima linha tipos diferentes
console.log( '1' === 1);

// Igualdade solta
console.log( 1 == 1);
console.log( '1' == 1);

// Comparação ternario
// Exemplo: tem um cliente, 100 premium, comum
let pontos = 200;
let tipo = pontos > 100 ? 'Premium' : 'Comum';
console.log(tipo);

// Operadores Logicos
// (&&) AND - Retorna TRUE se os dois operandos forem TRUE
console.log(true && false);
// Exemplo de &&
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);

// (||) OR - Retorna TRUE se uma das operandos forem TRUE
console.log(true || false);
// Exemplo de ||
let maiorDeIdades = false;
let possuiCarteiraDeTrabalhos = true;
let podeAplicars = maiorDeIdades || possuiCarteiraDeTrabalhos;
console.log(podeAplicars);

// (!) not - Retorna TRUE se uma das operandos forem TRUE
console.log(!false);
// Exemplo de ||
let maiorDeIdadesn = false;
let possuiCarteiraDeTrabalhosn = true;
let podeAplicarsn = maiorDeIdadesn =  !possuiCarteiraDeTrabalhosn;
console.log(podeAplicarsn);

// Comparação logica não boleanos
// FALSY - São esses tipos de valores - undefined, null, 0, false, '', NaN( not a number)
// TRUTHY - São tipos com valores - TRUE

// Exemplo
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

// Exercicios
// Trocar valores de variaveis
let a = 'vermelho';
let b = 'azul';
// resolução do exercicio - 
let c = a;  // c = vermelho
a = b;      // a = azul
b = c;      // b = vermelho
console.log(a);
console.log(b);

// if else
// Exemplo simples de if e else
/**
 * if(condição){
 *  codigo a ser executado
 * }
 * else if(outraCondição){
 *  codigo a ser executado
 * }
 * else{
 *  codigo a ser executado
 * }
 */
/**
 * Exercicio
 * Se a hora estiver entre 06:00 até 12:00 = "Bom dia!"
 * Se a hora estiver entre 12:00 até 18:00 = "Boa tarde"
 * Caso contrário = "Boa Noite"
 */
let hora = 18;

if(hora >= 6 && hora <= 12){
    console.log("Bom dia");
}
else if(hora > 12 && hora < 18){
    console.log("Boa tarde");
}
else{
    console.log("Boa Noite!");
}

// Switch Case
/**
 * switch(variavel que vai ativar a condição){
 * case 'indece':
 *  codigo a ser executado;
 * break;
 * 
 * default:
 *  codigo a ser executado;
 * }
 */

let permissao;
permissao = 'diretor';

switch(permissao){
    case 'comum':
        console.log('Usuário Comum');
    break;
    case 'gerente':
        console.log('Usuário Gerente');
    break;
    case 'diretor':
        console.log('Usuário Diretor');
    break;

    default:
        console.log('Usuário não reconhecido!');
}

// Temos 5 Laços de repetição no JS 
/**
 * 1 - For
 * 2 - While
 * 3 - Do .. While
 * 4 - For .. In -> Geralmente usado para pecorrer Objetos
 * 5 - For .. Of -> Geralmente usado para pecorrer Arrays
 */

// FOR
for(let i = 0; i < 5; i++){
    console.log(i, ' Estou Aprendendo JS')
}
for(let y = 0; y < 10; y++){
    if(y % 2 !== 0){
        console.log(y);
    }
}
for(let q = 10; q >= 1; q--){
    if(q % 2 == 0){
        console.log(q);
    }
}

//WHILE
let h = 1;
while(h <= 5){
    console.log(h, ' numero');
    h++;
}

// DO .. WHILE
let k = 0;
do{
    console.log('digitando -',k);
    k++
}while(k < 5)

// FOR .. IN
const usuario = {
    nome: 'Marcelo',
    idade: 33,
    curso: 'ADS',
    periodo: 4
 // Key : value
};
for(let chave in usuario){
    console.log(chave,": ", usuario[chave]);
}

// FOR .. OF
const cores = ['Azul','Marron','Vermelho','Verde'];
for(let cor of cores){
    console.log(cor);
    //console.log(cores[2]);
}

// *****  EXERCICIOS  *****

// 1 - Escreva uma função que usa 2 números e retorna o Maior entre eles.

let valorMaior = maior(10,19);
console.log(valorMaior);

function maior(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
//console.log(valorMaior);

// Tratando o codigo acima para fica mais legivel. OBS: Numero Menor
let menorNumero = menor(7,11);
console.log(menorNumero);

function menor(nu1,nu2){
    return nu1 < nu2 ? nu1 : nu2;
}

// FIZZBUZZ
/**
 * Importante para entrevista de emprego
 * FizzBuzz
 * Divisivel por 3 => Fizz
 * Divisivel por 5 => Buzz
 * Divisivel por 3 e 5 => FizzBuzz
 * Não divisivel por 3 ou 5 => Entrada
 * Não é um numero => 'Não é um número'
 */

const solucao = fizzBuzz(12);
console.log(solucao);

function fizzBuzz(entrada){
    if( typeof entrada !== 'number')
        return 'Não é um número';
    if((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if(entrada % 3 === 0)
        return 'Fizz'
    if(entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}

// 2 - Exercicio ( Medidor de Velocidade)
/**
 * Velocidade Máxima de até 70
 * A cada 5Km acima do limite voce ganha 1 ponto na carteira
 * Math.floor  --- Usa essa biblioteca para poder aredonda os numeros
 * Caso pontos maior que 12 -> "Carteira Suspensa"
 */
verificarVelocidade(175);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;

    if(velocidade <= velocidadeMaxima)
        return console.log('Ok');
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if(pontos >= 12)
            return console.log('Carteira Suspensa', pontos);
        else
            return console.log('Pontos',pontos);
    }
}

// 3 - Exercicio ( Par ou Impar)
/**
 * Receber uma quamtidade de valores para avaliar
 * Função exibe se cada valor é par ou impar
 */

exibirTipo(8);

function exibirTipo(limite){
    for(let i = 0; i <= limite; i++){
        if(i % 2 === 0){
             console.log(i,'Par');
        }
        else{
             console.log(i,'Impar');
        }
    }
}

let m = parImpar(8);
console.log(m)

function parImpar(medir){
    
        return medir % 2 === 0 ? 'Par' : 'Impar';
    
}

// 4 - Exercicios - Como ler propriedade de um Objeto
/**
 * Criar um metodo para ler propriedades de um objeto
 * Exibir somente as propriedades do tipo string que estão nesse objeto
 */
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Mike',
    personagem: 'Thor',
    edicao: 2
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string')
        console.log(prop, obj[prop])
    }
}

// 5 - Exercicios - 
/**
 * Criar função somar que retorna a soma de todos os múltiplos de 3 e 5
 */
adicao(10);

function adicao(limit) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0)
            multiplosDe3 += i;
        if(i % 5 === 0)
            multiplosDe5 += i;          
    }
    console.log(multiplosDe3 + multiplosDe5);
}

// 6 - Exercicios - Nota Escolar
/*
* Obter a média a partir de um array
*/
const array = [90,90,90];
console.log(mediaDoAluno(array))

function mediaDoAluno(notas){
    let soma = 0;
    for(let nota of notas){
        soma += nota;
    }
    const media = soma/(notas.length);
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'

}

const arrayz = [2,5,1];
console.log(mediaDoAlunos(arrayz))

function calcularMedia(arrayz){
    let soma = 0;
    for(let valor of arrayz){
        soma += valor;
    }
    return soma/(arrayz.length);
}
function mediaDoAlunos(notas){
    const media = calcularMedia(notas);
    if (media < 5) return 'F';
    if (media < 6) return 'D';
    if (media < 7) return 'C';
    if (media < 8) return 'B';
    return 'A'
}

// 7 - Exercicios - Asteristicos em Unidade
/**
 * Criar uma função que exibe a quantidade de * que aquela linha possui
 */
exibiAsteristicos(5)

function exibiAsteristicos(linh){
    let padrao = '';
    for(let linha = 1; linha <= linh; linha++ ){
        // padrao = padrao + '*'
        padrao += '*';
        console.log(padrao)
    }
}

// 8 - Exercicios - Numeros primos
/**
 *  Criar função para mostra os números primos
 */
exibirNumerosPrimos(20);

function exibirNumerosPrimos(lim){
    for(let num = 2; num <= lim; num++){
        let ehPrimo = true;
        for(let div = 2; div < num; div++){
            if(num % div === 0){
                ehPrimo = false;
                break;
            }
        }
        
        if(ehPrimo) console.log(num);
    }
}

// Codigo acima tratado 
exibirNumerosPrimosss(15);

function exibirNumerosPrimosss(li){
    for(let num = 2; num <= li; num++){
        if(numerosPrimosS(num)) console.log(num);
    }
}

function numerosPrimosS(numer){
    for(let div = 2; div < numer; div++){
        if(numer % div === 0){
            return false;
        }
    }
    return true;
}

// Objetos

const celular = {
    marca: 'ASUS',
    tamanhoTela: {
        vertical: 178,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação ... ')
    },
    camera: 30
}

console.log(celular.marca);
console.log(celular.tamanhoTela);
console.log(celular);

// Factory Functions -  Deixa Dinamico com encapsulamento o Objeto de cima
// Deixando dinamico o codigo acima
function criarCelular(marca,tamanhoTela,capacidadeBateria,camera){
    return {
        marca,
        tamanhoTela,
        capacidadeBateria,
        camera,
        ligar(){console.log('Fazendo ligação ... ')},
        
    }
}
const celular1 = criarCelular('LG',14.5,8000,16)
console.log(celular1)

// Constructur Functions(Funções de Construtor) -> Pascal Case

function celularNovo(marca,tamanhoTela,capacidadeBateria,camera){
    this.marca = marca,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.camera = camera,
    this.ligar = function(){
        console.log('ligando........')
    }
}
const celular2 = new celularNovo('Samsung',14.8,8000,20);
console.log(celular2);

const celular3 = new celularNovo('Motorola', 14.5, 8700, '28px');
console.log(celular3);

// Natureza Dinâmica de Objetos - Adicionar e Deletar em um Objeto

const mouse = {
    cor: 'red',
    marca: 'Dragon'
}
//Adicionando
mouse.velocidade = 1800;
mouse.temDPI = function(){
    console.log('Mudar DPI para 3000...');
}
console.log(mouse);
//Deletando
delete mouse.velocidade;
delete mouse.temDPI;
console.log(mouse);

// Clonado Objetos - Nesse exemplo estou clonado o Objeto celular2
// OBS: Pode passa parametros dentro do assign({Adicionar novo parametro})

// Primeira forma de Clonar
const cloneObjeto = Object.assign({carregador: 'Tipo - C'}, celular2);
console.log(cloneObjeto);

// Segunda forma de Clonar
const cloneObjetoComPonto = {...celular2};
console.log(cloneObjetoComPonto);

// Estudar a biblioteca Math - uma das mais usada em JS
// Estudar um pouco sobre String
// OBS: Essas pesquisar na internet = recomendo o site do mozila

/***************************** STRING *****************************/

// Tipo Primitivo
const mensagem = 'Mensagem primitiva';

// Tipo Objeto
const novaMensagem = new String('Mensagem Objeto');

// Template Literal(``  S6) - Pesquisar no google javascript escape sequences
// Jeito chumbo
//const mensagemLinha = 'Pessoal, minha internet caiu\n Tô tentando reconectar'
// Com template literal em S6
const meuNome = 'Marcelo Rodrigues';

const email = `Olá ${meuNome}

Alguns 'restaurantes' sinalizados no aplicativo não permitem o

acompanhamento do trajeto no mapa.

Confira a disponibilidade de acompanhamento no aplicativo "Uber Eats."

Obrigado,
${meuNome}`;

// Date
const data1 = new Date();
const data2 = new Date(2021,7,18,11,55);
data2.setMonth(10);

//