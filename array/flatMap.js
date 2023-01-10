const escola = [
    {
        nome: 'Turma N1',
        alunos: [
            { nome: 'Gustavo', nota: 8.1 },
            { nome: 'Ana', nota: 9.3 }
        ]
    },
    {
        nome: 'Turma N2',
        alunos: [
            { nome: 'Rebeca', nota: 8.9 },
            { nome: 'Roberto', nota: 7.3 }
        ]
    }
];

const getNotaAlunos = aluno => aluno.nota;
const getNotaTurma = turma => turma.alunos.map(getNotaAlunos);
const notas1 = escola.map(getNotaTurma)

console.log(notas1);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)