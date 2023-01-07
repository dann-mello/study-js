const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// console.log(nome, idade) ERRO
const {
    nome,
    idade
} = pessoa; //Tire de dentro do objeto PESSOA  - nome e idade
console.log(nome, idade)

const {
    nome: n,
    idade: i
} = pessoa; //Altere o nome dos meus atributos dentro do objeto pessoa
console.log(n, i)

//Desestruturando atributo inexistente
const {
    sobreNome,
    bemHumorado = true
} = pessoa;
console.log(sobreNome, bemHumorado)

//Objeto dentro de objeto
const {
    endereco: {
        logradouro,
        numero,
        cep
    }
} = pessoa;
console.log(logradouro, numero, cep)