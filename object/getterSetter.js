//Get e Set - são funções e que dentro dessas funções valores são acessados.

const sequencia = {
    _valor: 1, //Convenção - Mostrando que essa variável é manipulanda apenas internamente;
    get valor() {
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

//JS não aceita sobrecarga de métodos ou seja, vários métodos com parâmetros diferentes. Isso só é possível no GET e SET
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia.valor, sequencia.valor)