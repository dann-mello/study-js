/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

function tabelaConvenio(idadeCliente) {
    const valorPadrao = 100;
    let adicional = Number;
    if (idadeCliente < 0 || idadeCliente > 150 || isNaN(idadeCliente)) {
        return 'Informação inválida'
    } else if (idadeCliente >= 0 && idadeCliente <= 10) {
        adicional = valorPadrao + 80;
        return `O valor a ser pago será R$${adicional.toFixed(2).replace('.', ',')}`
    }else if(idadeCliente > 10 && idadeCliente <= 30){
        adicional = valorPadrao + 50;
        return `O valor a ser pago será R$${adicional.toFixed(2).replace('.', ',')}`
    }else if(idadeCliente > 30 && idadeCliente <= 60){
        adicional = valorPadrao + 95;
        return `O valor a ser pago será R$${adicional.toFixed(2).replace('.', ',')}`
    }else{
        adicional = valorPadrao + 130;
        return `O valor a ser pago será R$${adicional.toFixed(2).replace('.', ',')}`
    }
}

console.log(tabelaConvenio(8));
console.log(tabelaConvenio(15));
console.log(tabelaConvenio(35));
console.log(tabelaConvenio(52));
console.log(tabelaConvenio(80));
