//Operador ...rest(Juntar)/ spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: '12348.99',
}
const clone = { ativo:true, ...funcionario };

//usar spread com array
const grupoA = ['João', 'Carlos', 'Glória'];
const grupoB = ['Pedro', ...grupoA, 'Luana'];
console.log(grupoB);