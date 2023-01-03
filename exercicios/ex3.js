//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function calcularExpoente(base, expoente) {
    //Método antigo
    // let resultado = Math.pow(base, expoente)
    // return resultado

    //Método novo
    let resultado = base ** expoente;
    return resultado
}

console.log(calcularExpoente(5, 4));

//Math.pow - É uma função que já me retorna um valor de base elevada a uma potência.
