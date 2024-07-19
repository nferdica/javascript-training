class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    // Os métodos são linkados automaticamente no prototype da classe, sendo assim menos complexo que na função construtora.
    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    beber() {
        console.log(`${this.nome} está bebendo`)
    }
}

const pessoaOne = new Pessoa('Nathan', 'Ferdinando')
pessoaOne.falar()