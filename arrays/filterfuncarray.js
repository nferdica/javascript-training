// Filter function -> Sempre vai retornar um array com a mesma quantidade de elementos ou menos dependendo do filtro!

// Retorne numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosFilters = numeros.filter(valor => { // Arrow function
    return valor > 10;
})

console.log(numerosFilters)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos.
// Retorne as pessoas cujo nome termina com A.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNameMaxLetters = pessoas.filter(valor => {
    return valor.nome.length >= 5;
});

const pessoasAcimaIdade = pessoas.filter(valor => {
    return valor.idade > 50;
})

const nomeTerminaComA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a')
})

console.log(pessoasNameMaxLetters);
console.log(pessoasAcimaIdade);
console.log(nomeTerminaComA);

