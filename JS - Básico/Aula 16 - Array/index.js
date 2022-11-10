const alunos = ['Maciel', 'Marconi', 'Marcelo'];

alunos.unshift('Manoel'); // Adiciona no começo
alunos.push('Mauricio'); // Adiciiona no final
alunos.push('Rodrigues'); // Adiciiona no final
const removido = alunos.pop(); // Remove o ultimo só o pop
const removePrimeiro = alunos.shift(); // Remove o primeiro elemento
console.log(removePrimeiro);
console.log(removido);
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos[3]);
console.log(alunos[80]); // Não da erro, mais passa undefined
console.log(alunos.length);