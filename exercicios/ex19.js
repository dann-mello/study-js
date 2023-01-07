/*Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/
function restauranteDoSeuZe(cod, quan) {
    if(quan <= 0){
        return 'Quantidade inválida!';
    }

    let preco;
    switch (cod) {
        case 100:
            preco = 3 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Cachorros Quentes. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Cachorro Quente. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        case 200:
            preco = 4 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Hambúrgueres Simples. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Hambúrguer Simples. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        case 300:
            preco = 5.50 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Cheeseburgueres. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Cheeseburguer. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        case 400:
            preco = 7.50 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Baurus. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Bauru. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        case 500:
            preco = 3.50 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Refrigerantes. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Refrigerante. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        case 600:
            preco = 2.80 * quan
            if (quan > 1) {
                return `Pedido de ${quan} Sucos. Total da compra efetuada: R$${preco.toFixed(2)}`;
            } else {
                return `Pedido de ${quan} Suco. Total da compra efetuada: R$${preco.toFixed(2)}`;
            };
        default:
            return 'Pedido inválido!'
    }
}


console.log(restauranteDoSeuZe(100, 3));
console.log(restauranteDoSeuZe(200, 1));
console.log(restauranteDoSeuZe(300, 2));
console.log(restauranteDoSeuZe(400, 2));
console.log(restauranteDoSeuZe(500, 5));
console.log(restauranteDoSeuZe(600, 2));
console.log(restauranteDoSeuZe(700, 3));
console.log(restauranteDoSeuZe(200, 0));