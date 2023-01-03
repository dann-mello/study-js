/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capinicial, juros, tempo) {
    juros = juros / 100;

    let simples = capinicial * juros * tempo;
    capinicial += simples;
    console.log(`Este foi o valor final da sua aplicação de juros simples: R$ ${capinicial.toFixed(2)}`);
}
jurosSimples(1000, 10, 3)


function jurosCompostos(capinicial, juros, tempo) {

    juros = juros / 100;

    let composto = 1 + (juros * tempo);
    let valorFinal = (composto - 1) * capinicial;
    capinicial += valorFinal
    console.log(`Este foi o valor final da sua aplicação de juros compostos: R$ ${capinicial.toFixed(3)}`)
}

jurosCompostos(500.000, 5, 3);