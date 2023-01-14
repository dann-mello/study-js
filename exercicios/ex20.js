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
