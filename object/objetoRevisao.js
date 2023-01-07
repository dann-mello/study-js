//coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['Marca do Produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['Marca do Produto'];
console.log(produto);


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        },
    },
    condutores: [{
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }
    ],
    calcularValorSeguro: function(teste){
        return teste
    }
};

carro.condutores.push({
    nome: 'Franscisco',
    idade: 96
})

console.log(carro.condutores)