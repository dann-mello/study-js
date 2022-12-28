function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota} de nota.`)
    } //Se a nota for maior ou igual a 7, o bloco associado ao IF será executado. Se for falso, não será chamado.
}

soBoaNoticia(5.1);
soBoaNoticia(7.5);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    } //Nesse contexto, o JS entende que eu preciso ter um valor verdadeiro.
}

//Falso
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

//Verdade
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
seForVerdadeEuFalo({
    n1: 1,
    n2: 2
})