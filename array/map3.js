const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];
//Retornar um array apenas com preço

const objTransform = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;
const resultado = carrinho.map(objTransform).map(apenasPreco);
console.log(resultado)