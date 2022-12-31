function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo Privado
    let velocidadeAtual = 0;

    //Método Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Método Público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro;
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());
