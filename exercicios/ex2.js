/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function ladoTriangulo(l1, l2, l3) {
    if (l1 === l2 && l2 === l3) {
        console.log('Equilátero')
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        console.log('Isóceles')
    } else {
        console.log('Escaleno')
    }
}

ladoTriangulo(4, 5, 6);
ladoTriangulo(5, 5, 5);
ladoTriangulo(9, 9, 5);