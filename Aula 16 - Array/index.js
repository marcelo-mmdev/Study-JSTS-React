const alunos = ['Maciel', 'Marconi', 'Marcelo'];

alunos.push('Manoel');
alunos.push('Mauricio');
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos[3]);
console.log(alunos[80]); // Não da erro, mais passa undefined
console.log(alunos.length);