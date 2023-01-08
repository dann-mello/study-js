function inserirNome (meuNome){
    let name = 'Daniel';
    meuNome(name)
}

function meuNome(name){
    console.log(`Olá ${name}`)
}

inserirNome(meuNome)