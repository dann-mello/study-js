function divisivel(valor){
    if(valor % 3 === 0){
        return 'É divisível'
    }else{
        return 'Não é divisível'
    }
}

console.log(divisivel(3))
console.log(divisivel(5))
console.log(divisivel(9))
console.log(divisivel(15))
console.log(divisivel(30))
console.log(divisivel(2))