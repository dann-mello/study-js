/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function dias(diaDaSemana) {
    switch (diaDaSemana) {
        case 1:
        case 7:
            return 'Final de Semana';
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil';
        default:
            return 'Dia inválido'
    }
}

console.log(dias(2))
console.log(dias(309))
console.log(dias(7))
console.log(dias(5))
console.log(dias('a'))