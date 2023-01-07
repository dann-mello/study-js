// pessoa -> 123 -> {...} 
const pessoa = {
    nome: 'joão'
}
pessoa.nome = 'Pedro';
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {
//     nome: 'Daniel'
// }

// console.log(pessoa)

Object.freeze(pessoa);//Objeto congelado
pessoa.nome = 'Daniel';
console.log(pessoa);

pessoa.end = 'Rua ABC';
console.log(pessoa);

delete pessoa.name;
console.log(pessoa);
//Após o freeze o objeto se torna constante

const objetoConstante = Object.freeze({
    nome: 'joão',
    idade: 12,
    altura: '120cm'
});
console.log(objetoConstante);

objetoConstante.mae = 'Dona Eunice';
console.log(objetoConstante)//Objeto constante desde sua criação.