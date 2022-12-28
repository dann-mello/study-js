const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i in nums){
    if(i === 5){//Aqui o break para a repetição atual e vai para fora do laço
        break
    }
    console.log(`${i} = ${nums[i]}`)
}

// for(let y in nums){
//     if(y === '5'){//Aqui o continue para a repetição atual e vai para a próxima
//         continue
//     }
//     console.log(`${y} = ${nums[y]}`)
// }