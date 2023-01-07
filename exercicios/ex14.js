/*Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

function vendaDoTiozin(fruta) {
    switch (fruta) {
        case 'Maçã':
            return 'Não vendemos esta fruta aqui';
        case 'Kiwi':
            return 'Estamos com escassez de kiwis';
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Sua opção é inválida';
    }
}

console.log(vendaDoTiozin('Maçã'))
console.log(vendaDoTiozin('Kiwi'))
console.log(vendaDoTiozin('Melancia'))
console.log(vendaDoTiozin('Alface'))