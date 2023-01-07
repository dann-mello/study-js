/*Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
function aumentoSal(sal, plan) {
    switch (plan) {
        case 'A':
            return sal * (1 + 0.10);
        case 'B':
            return sal * (1 + 0.15);
        case 'C':
            return sal * (1 + 0.20);
        default:
            return 'Plano inválido'
    }
}

console.log(aumentoSal(1000, 'B'))
console.log(aumentoSal(1000, 'A'))
console.log(aumentoSal(1000, 'C'))
console.log(aumentoSal(1000, 'F'))
