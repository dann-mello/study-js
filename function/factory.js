//Função que retorna um Obj
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 3145
}

//Usando função Factory simples
function criarPessoa() {
    return {
        nome: '...',
        preco: 3145
    }
}

//Usando função Factory para mais Objetos
function criarProduto(nome, preco){
    const desconto = (0.4 * 100);
    return{
        nome: nome,
        preco: preco,
        desconto: preco - desconto
    }
};

let produto1 = criarProduto('Daniel', 1000);
console.log(produto1);

//Refatorando
function criarProduto(nome, preco){
    return{
       nome,
       preco,
       desconto: 0.4
    }
};

//Obs: Nesse caso não se usa this, pois ainda estou criando o obj portanto não é preciso referência-lo