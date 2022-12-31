// function pessoa(){
//     this.idade = 0;

//     setInterval(function (){
//         this.idade++
//         console.log(this.idade);
//     }, 1000)
// }

// function pessoa(){
//     this.idade = 0;

//     setInterval(function (){
//         this.idade++
//         console.log(this.idade);
//     }.bind(this), 1000)
// }

// function pessoa(){
//     this.idade = 0;

//     const self = this
//     setInterval(function (){
//         self.idade++
//         console.log(self.idade);
//     }, 1000)
// }



// new pessoa


//Ex: this
// function dizerBomDia(){
//     console.log(`Bom dia ${this.name}`)
// }

// const pessoa = {
//     name: 'João',
//     dizerBomDia
// }

// const pessoa2 = {
//     name: 'Maria',
//     dizerBomDia
// }

// const pessoa3 = {
//     name: 'Carlos',
//     dizerBomDia
// }

// pessoa.dizerBomDia();
// pessoa2.dizerBomDia();
// pessoa3.dizerBomDia();

//Ex: Bind

function dizerBomDia(){
    console.log(`Bom dia ${this.name}`)
}

const pessoa = {
    name: 'João',
    
}

const pessoa2 = {
    name: 'Maria',
    
}

const pessoa3 = {
    name: 'Carlos',
    
}

pessoa.BomDia = dizerBomDia.bind(pessoa);//resolvido
pessoa.BomDia()