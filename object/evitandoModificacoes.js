//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
}); //Permitido apenas remover atributos
console.log('Extensivel:', Object.isExtensible(produto)); //Não é um objeto extensível

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal - Não é possível adicionar ou excluir elementos. Apenas alterar valores
const pessoa = {
    nome: 'Juliana',
    idade: 34
};
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 48;
console.log(pessoa);

//Object.freeze = selado + valores constantes!