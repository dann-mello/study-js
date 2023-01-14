//let e const

{
    var a = 2;
    let b = 3;
    console.log(a)//OK
    console.log(b)//undefined
}

console.log(a)//OK
// console.log(b)//undefined

//Template String
const produto = 'iPad'
console.log(`${produto} é caro`);
console.log(`${produto} 
é 
caro`);

//Destructuring
const [l, e, ...tras] = "Daniel";
console.log(l, e ,tras);

const [x, ,y] = [1,2,3];
console.log(x, y);

const {idade,nome} = {nome: 'Daniel', idade: 9};
console.log(idade, nome)