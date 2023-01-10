/*O método reduce() executa uma função reducer (fornecida por você) 
para cada elemento do array, resultando num único valor de retorno.*/
//A função reduce recebe quatro(4) valores:
//1 Acumulador (acc)
//2 Valor Atual (cur)
//3 Index Atual (idx)
//4 Array original (src)

const reduce = [0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, index, array) {
    console.log(index, array)
    return acumulador + valorAtual;
});
// 10
console.log(reduce)

const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
];


console.log(alunos.map(a => a.bolsista))
const resultado = alunos.map(a => a.nota).reduce(function(acc, atual){
    console.log(acc, atual);
    return acc + atual;
});
