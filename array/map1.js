/*O método map() invoca a função callback passada por argumento 
para cada elemento do Array e devolve um novo Array como resultado.*/
//A callback recebe três argumentos:
//1 - Nome de cada elemento do array;
//2 - O indice de cada elemento
//3 - O array que está sendo percorrido. Nesse contexto o array principal no caso

//MAP é uma função de transformação. Ela não altera meu array e sim me retorna outro.

const produtos = [
    {
        nome: 'Notebook',
        preco: 2100
    },
    {
        nome: 'Smartphone',
        preco: 400
    }
];

const precosEmReais = produtos.map(p => p.preco * 4);

console.log(precosEmReais);

console.log(produtos)
