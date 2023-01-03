/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
function calcular(n1, n2) {
    console.log(n1 + n2);
    console.log(n1 - n2);
    console.log(n1 * n2);
    console.log(n1 / n2);
}

calcular(10, 5);

//Arrow Function
const calcular2 = (n1, n2) => {
    console.log(n1 + n2);
    console.log(n1 - n2);
    console.log(n1 * n2);
    console.log(n1 / n2);
}

calcular2(30, 9);