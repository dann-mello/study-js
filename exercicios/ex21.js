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