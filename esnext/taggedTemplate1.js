//Tagged Template - Processa um template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Mais uma string'
}

const aluno = 'Dan';
const situacao = 'Aprovado';
console.log(tag`${aluno} está ${situacao}`)