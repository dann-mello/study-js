function getInteiroAleatoriamente(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Math.floor - É uma função que arredonda valores decimais
// Math.random() - É uma função que me gera um valor entre 0 e 1.

let opcao = 0;

while(opcao != -1){
    opcao = getInteiroAleatoriamente(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}
console.log('Fim')