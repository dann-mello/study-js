//ForEach - Para cada.
//Foreach passa como argumento uma callback e essa callback recebe até 4 parâmetros.
//1 - Nome de cada elemento do array;
//2 - O indice de cada elemento
//3 - O array que está sendo percorrido. Nesse contexto o array principal no caso
//4 - Valor a ser usado como this quando executar callback.
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach((nomeDosElementos, indice, arrayAplicado, thisArg) => {
    console.log(nomeDosElementos, indice, arrayAplicado, thisArg)
})