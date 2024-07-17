// return functions, retorna um valor e termina a função

function criaMulti (multiplicador) {
    return function (n) {
        return n * multiplicador
    }
}

const duplica = criaMulti(2);
const triplica = criaMulti(3);
const quadriplica = criaMulti(4);

console.log(duplica(10))
console.log(triplica(10))
console.log(quadriplica(20))


function calcIdade (nascimento) {
    return function (anoatual) {
        return anoatual - nascimento
    }
}

const idade = calcIdade(2002)
console.log(idade(2024));
