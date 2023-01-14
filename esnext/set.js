//Set estrutura de conjunto
//Estrutura não indexada e não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nome = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nome)
console.log(nomesSet)