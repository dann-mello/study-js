function getInteiroAleatoriamente(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao;//Não é necessário atribuir valor na variavél para iniciar o doWhile pois é garantido que a estrutura vá rodar ao menos uma vez

do{
    opcao = getInteiroAleatoriamente(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}while(opcao != -1)//Única estrutura na qual a expressão é após o bloco.
console.log('Fim')