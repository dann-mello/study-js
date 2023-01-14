//Es8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Class(Internamente é convertida em uma função)
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
