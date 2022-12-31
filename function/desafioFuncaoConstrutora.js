function DizerNome(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const nome1 = new DizerNome('Daniel');
nome1.falar()