// Reduce -> Ideal para reduzir um array em apenas um elemento

// Some todos os numeros.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce((acumulador, valor) => {
     acumulador += valor
     return acumulador;
}, 0)

console.log(total);


// Ultilizando reduce como filter...
const numerosPares = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const totalPares = numerosPares.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador;
},[])

console.log(totalPares)




// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 80},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

console.log(maisVelha);


