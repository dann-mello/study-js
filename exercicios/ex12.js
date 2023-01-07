//Faça um algoritmo que calcule o fatorial de um número.

function fatorial(n) {
    let resultado = 1;
    if (n > 0) {
        for (let i = n; i > 0; i--) {
            // console.log(i)
            console.log(resultado *= i)
        }
        return `O fatorial de ${n} é igual a: ${resultado}`
    }
}

console.log(fatorial(10))

