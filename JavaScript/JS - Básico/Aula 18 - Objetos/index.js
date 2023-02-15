// Objetos Liiterais 
const pessoa1 = {
    nome: "Marcelo",
    sobrenome: "Rodrigues",
};

const pessoa2 = {
    nome: "Ana",
    sobrenome: "Santos"
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);
/////////////////////////////////////////////////
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const pessoa11 = criaPessoa('Anacele', 'Silva');
const pessoa22 = criaPessoa('Manoel', 'Marcelo');

console.log(pessoa11.sobrenome);
console.log(pessoa22.sobrenome);
///////////////////////////////////////////////////
const pessoa3 = {
    nome: "Ana",
    sobrenome: "Santos",
    idade: 27,
    fala(){
        console.log(`Minha idade atual é ${this.idade}.`)
    },
    incrementaIdade(){
        this.idade++;
    }
};

console.log(pessoa3.nome);
pessoa3.fala()
pessoa3.incrementaIdade();
pessoa3.fala();
//////////////////////////////////////////////////