const nome = 'Nathan'
const sobrenome = 'Ferdinando'
const idade = 22

export function soma(x, y) {
    return x + y
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobreno = sobrenome
    }
}

export default (x, y) => x * y // Podemos exportar apenas um valor default!

export {nome, sobrenome, idade}