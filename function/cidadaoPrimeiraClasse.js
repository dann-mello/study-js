//Função em JS é First-Class Object (Citizens)
//Higher-Order Function (Função de Alta Ordem)

function fun1() {
    //Criação de Função de Forma Literal
};

//Armazenando em uma variável
const fun2 = function (nota) {

};

//Armazenando em um Array
const fun3 = [function (a, b) {return a + b}, fun1, fun2];

console.log(fun3[0](1, 6));

//Armazenando em um Object
const fun4 = {
    falar: function () {
        console.log('Opa') 
    }
}

fun4.falar()

//Passar função como Parâmetro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})