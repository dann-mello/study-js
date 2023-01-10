//O método filter basicamente me retorna um boolen. Se verdadeiro me retorne.
//filter passa como argumento uma callback com 3 parâmetros.
//1 - Nome de cada elemento do array;
//2 - O indice de cada elemento
//3 - O array que está sendo percorrido. Nesse contexto o array principal no caso
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

// const produtosFrageis = produtos.filter(filtro => filtro.fragil === true)
// console.log(produtos)
// console.log(produtosFrageis)

const caroFragil = produtos.filter(produto => produto.preco > 500 && produto.fragil)
console.log(caroFragil)