//Não existe array nativo em JS. Array é um Objeto
//É uma estrutura dinâmica
//É uma estrutura heterogênea. Obs: Para boas práticas trabalhe o array com dados homogêneos
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana');//Instanciado
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'];//Notação Literal. !!RECOMENDADA!!
console.log(aprovados[0]);//Estrutura indexada a partir do 0
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);//Em JS retornará undefined

aprovados[3] = 'Paulo';//Comum para substituir elementos
console.log(aprovados[3])

aprovados.push('Abia');//Comum para adicionar
console.log(aprovados);

console.log(aprovados.length);//Tamanho do meu array

aprovados[9] = 'Rafael';
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort()//Função sort ordena o array em ordem alfabética
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'];
//splice('A partir de qual indice eu quero trabalhar', 'quantos eu quero deletar', 'quantos eu quero adicionar')
aprovados.splice(0, 1, 'Meu pau de asa');
console.log(aprovados)