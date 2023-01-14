//Arrow function
const soma = (a, b) => a + b;//São funções anônimas
console.log(soma(2, 3))

//Arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({});
lexico1();
lexico2();

//Parâmetros default(padronizar parâmetros)
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou forte')
log(null)

//Operador rest ou spread
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,5,9,8,7,5,6,3,4,5,6))
console.log(total(1,5,9))

const arr = (...teste) => teste//Retorna um array

console.log(arr(1,2,3, 'Daniel'))