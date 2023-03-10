//Usando a notação literal
const obj1 = {

}
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2)

//Funções construtora
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return (preco * (1 - desc))
    }
}

const prod1 = new Produto('Caderno', 20, 0.15);
const prod2 = new Produto('Lápis', 7.99, 0.10);
console.log(prod1.getPrecoComDesconto())
console.log(prod2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null);
filha.nome = 'Alice';
console.log(filha)

//Json.parse
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}');
console.log(fromJSON.info)