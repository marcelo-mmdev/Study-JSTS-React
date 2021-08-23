// Operadores Logicos
// (&&) AND - Retorna TRUE se os dois operandos forem TRUE
// (||) OR - Retorna TRUE se uma das operandos forem TRUE
// (!) not - Retorna TRUE se uma das operandos forem TRUE

console.log("Primeiro desafio: Detetive");
console.log('');

let soma = 0;

let q1 = prompt("Telefonou para a vítima?");
    if(q1 == "Sim" || q1 == "S"){ 
        soma = soma + 1
    }
// Aqui era bom ver a questão se poderia usar &&
let q2 = prompt("Esteve no local do crime?");
    if(q2 ==" Sim"|| q2 == "S"){
        soma = soma +1
    }
// Aqui era bom ver a questão se poderia usar &&
let q3 = prompt("Mora perto da vítima?");
    if(q3 == "Sim" || q3 == "S"){
        soma = soma +1 
    }
// Aqui era bom ver a questão se poderia usar &&
let q4 = prompt("Devia para a vítima?");
    if(q4 == "Sim" || q4 ==  "S"){ 
        soma = soma + 1
    }
// Aqui era bom ver a questão se poderia usar && e tbm ||
let q5 = prompt("Já trabalhou com a vítima?");
    if(q5 == "Sim" || q5 == "S"){
        soma = soma + q1
    }
    if(soma < 2){
        console.log("Inocente")
    }

    if(soma == 2){
        console.log("Suspeita")
    }

    if(soma == 3 || soma ==  4){
        console.log("Cumplice")
    }

    else(soma == 5){
        console.log("Assassino")
    }

/**
 * Olha sua teoria está correta, Só falta ter um codigo limpo com identação e legivel, com um pouquinho de logíca
 */