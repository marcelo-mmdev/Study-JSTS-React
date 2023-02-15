// 
function scopo () {
    const form = document.querySelector('.form');

    function recebendoEvento(evento) {
        evento.preventDefault();
        console.log("Formulario não")
    }

  form.addEventListener('submit', recebendoEvento);
}
scopo();
//////////////////////////////////////////////////////////

function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebendoEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)

        resultado.innerHTML += `Nome: ${nome.value} &nbsp;` + `Sobrenome: ${sobrenome.value} &nbsp;` +
        `Peso: ${peso.value} &nbsp;` + `Altura: ${altura.value} <br/>`;
    }

  form.addEventListener('submit', recebendoEvento);
}
meuEscopo();
