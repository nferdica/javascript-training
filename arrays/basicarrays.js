// Array, formas diferentes de criar array, delete entre outros...
// Array são dados por referencia...
// pop() remove o item do final do array.
// shift() remove o item do inicio do array.
// push() Adiciona um item no final do array.
// unshift() Adiciona um item no inicio do array.
// silce() Fatiamento de arrays
// split() Converter string em arrays, separando em itens diferentes...
// join() Converter arrays em string

const nomes = ['Nathan', 'Felipe', 'Maria']

const nomesConstructor = new Array('Nathan', 'Marcos', 'Enzo')
console.log(nomesConstructor)

nomes.push('Nathaly', 'Luiz')
const popRemoved = nomes.pop()
const shiftRemoved = nomes.shift()

const novo = nomesConstructor.slice(0,2)

const nomeCompleto = 'Nathan Carvalho Ferdinando'
const separaNome = nomeCompleto.split(' ');

const nomeToString = separaNome.join(' ')

console.log(nomeToString)
console.log(separaNome)
console.log(nomes);
console.log(popRemoved);
console.log(shiftRemoved);
console.log(nomesConstructor);
console.log(novo)