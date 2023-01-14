const tecnologias = new Map()
tecnologias.set('React', {framework: false});
tecnologias.set('Angular', {framework: true});

console.log(tecnologias.React);
console.log(tecnologias.get('React').framework);

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((valor, chave) => {
    console.log(chave,valor)
})

console.log(chavesVariadas.has(123))//Função que diz se o elemento esta ou não no Map
console.log(chavesVariadas.delete(123))//Função me retorna um boolean
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//Quantos elementos estão contidos dentro do Array
