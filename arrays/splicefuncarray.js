// Função splice

const nomes = ['Nathan', 'Maria', 'Felipe', 'Josefa', 'Martinez']
const removedElement = nomes.splice(4, 1, 'Ferdinando')

console.log(nomes);
console.log(removedElement);

// Concatenando arrays
// Concatenação utilizando .concat

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Nathan Ferdinando', 'Maria Tereza')
console.log(a3)

// Concatenação utilizando spread (...)

const g1 = [1, 2, 3]
const g2 = [4, 5, 6]
const g3 = [...g1, ...g2]
console.log(g3);