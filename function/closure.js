//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite que você acesse variáveis externas à função

//Contexto léxico em ação
// const x = 'Global';
// function fora(){
//     const x = 'Local';
//     function dentro(){
//         return x
//     }
//     return dentro
// }

// const minhaFuncao = fora();
// console.log(minhaFuncao())

function init() {
    var name = "Mozilla"; // name é uma variável local criada pelo init
    function displayName() {
      // displayName() é a função interna, uma closure
      console.log(name); // usa a variável declarada na função pai
    }
    displayName();
  }
  init();