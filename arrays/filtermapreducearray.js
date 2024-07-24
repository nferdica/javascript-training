// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir somar tudo.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Filtrar pares.
const numerosPares = numeros.filter((valor) => {
    if(valor % 2 === 0) return valor;
})

console.log(numerosPares)

// Soma dos valores pares
const somaDosPares = numerosPares.reduce((acumulador, valor) =>{
    acumulador += valor;
    return acumulador;
}, 0)

console.log(somaDosPares);

// Dobro dos numeros
const dobrarNumeros = numeros.map((valor) => {
    return valor * 2;
})

console.log(dobrarNumeros)

// Soma de todos os numeros
const somarNumeros = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0)

console.log(somarNumeros)

