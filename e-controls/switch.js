const imprimirResultado = (nota) =>{
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('quadro de Honra');
            break//Ele irá sair do case executando apenas a sentença anterior. Caso não tenha o breake ele executa todas as próximas
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break
        default:
            console.log('Nota inválida !');
    }
}

imprimirResultado(9);
imprimirResultado(5.9);
imprimirResultado(2);
imprimirResultado(7);