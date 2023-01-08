const pilotos = ['Vettel', 'Alonso', 'Riakkonen', 'Massa'];
pilotos.pop();//Remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift();//Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton');//Adiciona elemento no início do array
console.log(pilotos);

//splice('A partir de qual indice eu quero trabalhar', 'quantos eu quero deletar', 'quantos eu quero adicionar')
//Adicionando...
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos)

//Removendo...
pilotos.splice(3, 1);
console.log(pilotos)

//splice('A partir de qual indice eu quero trabalhar',' Até aonde eu quero trabalhar - 1')
const algunsPilotos = pilotos.slice(2);//Retorna um novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2)