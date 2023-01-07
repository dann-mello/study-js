//JSON(JavaScript Object Notation) - Notação de objeto em Javascript.
//Todas as linguagens conseguem ler o formato JSON

//Object
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))
// console.log(JSON.parse("{a:1,b:2,c:3}")) //Erro
// console.log(JSON.parse("{ 'a':1, 'b':2 , 'c':3 }")) //Erro
console.log(JSON.parse('{ "a":1, "b":2 , "c":3 }'))//OK
//JSON
//1 Aspas simples por fora
//2 Chaves como um obj
//3 Aspas duplas nos atributos e nos valores strings

