function teste1(num) {
    if (num > 7)
        console.log(num);
    console.log('Final');

}

// teste1(6);
// teste1(8);

function teste2(num) {
    if (num > 7); {
        console.log(num)
    }//Nesse caso os dois números serão impressos pois a estrutura de cotrole, por conta do ponto e vírgula( ; ) tem apenas uma sentença vazia associada a ela
}

teste2(6);
teste2(8);