// Funções geradoras
function* geradorOne() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const geraOne = geradorOne();
console.log(geraOne.next().value);
console.log(geraOne.next().value);
console.log(geraOne.next().value);