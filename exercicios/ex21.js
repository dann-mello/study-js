/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/

function pagarAnual(mes, valor) {
    const juros = 0.05;
    let soma = 0;

    if (mes <= 0 || mes > 12 || isNaN(mes)) {
        return 'Mês inválido. Digite novamente'
    }

    for (let i = 0; i < mes; i++) {
        soma += juros
    }

    valor += (valor * soma)


    return `A anuidade deste mês deverá ser paga com a seguinte quantia: R$${valor.toFixed(2).replace('.', ',')}`
}

console.log(pagarAnual(4, 110))
console.log(pagarAnual(5, 400))
console.log(pagarAnual(12, 400))
console.log(pagarAnual(13, 400))
console.log(pagarAnual('Fodase', 400))
console.log(pagarAnual(0, 400))
console.log(pagarAnual(-5, 400))