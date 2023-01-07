const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}

const filho = Object.create(pai)
filho.nome = 'Joao';
console.log(filho.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filho2.nome)
filho2.nome = 'Carla';
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`);

console.log(Object.keys(filho))
console.log(Object.keys(filho2))