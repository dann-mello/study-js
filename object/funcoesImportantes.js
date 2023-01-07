const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //Será listada
    writable: false, //Não será modificada
    value: '01/01/2019'
}); //defineProperty - Cria uma propriedade com caracteristicas especificas

pessoa.dataDeNascimento = '01/12/2022';
console.log(pessoa.dataDeNascimento) //Data não foi modificada
console.log(Object.keys(pessoa)) //Foi listada

const dest = {
    a: 4
};
const o1 = {
    b: 2
};
const o2 = {
    c: 3,
    a: 2
};
const obj = Object.assign(dest, o1, o2);// Concatena os atributos dos objetos transformando em um só. 

console.log(obj)
//Obs: se tiver dois atributos com o mesmo par chave ele atribui o último.

//Object.freeze(objeto) - Congela o objeto, tornando o objeto constante ou seja impossível de ser alterado