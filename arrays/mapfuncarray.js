// Filter function -> Cria um novo array a partir do original com valores alterados

// Dobre os numeros por dois.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => {
    return valor * 2;
})

console.log(numerosEmDobro)


// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto.

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const retornaNome = pessoas.map(valor => {
    return valor.nome
})

const retornaIdade = pessoas.map(valor => {
    return valor.idade
})

const adicionaChave = pessoas.map((valor, indice) => {
    const newObj = {...valor};
    newObj.id = indice + 1;
    return newObj;
})

console.log(retornaNome);
console.log(retornaIdade);
console.log(adicionaChave);
console.log(pessoas);


