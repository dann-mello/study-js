//Cadeia de prototipos (Prototype chain)
Object.prototype.attr0 = 'Z'; //Obj avo aponta para o prototype

const avo = {
    attr1: 'A',
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing - Quando uma variável de escopo local sobrescreve variaveis de escopo abrangente
}


const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}Km/h de ${super.status()}Km/h`
    }
}

Object.setPrototypeOf(ferrari, carro)//Ferrari tem carro como seu protótipo
Object.setPrototypeOf(volvo, carro)
ferrari.acelerarMais(480)
console.log(ferrari.status())
// console.log(volvo)
// volvo.acelerarMais(100)
// console.log(volvo.status())