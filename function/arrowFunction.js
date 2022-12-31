let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a; //retorno implícito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

//Refatorando...
ola = () => 'Ola';

//ou
ola = _ => 'Ola';//O underline é considerado um parâmetro válido, porém é só ignorar
