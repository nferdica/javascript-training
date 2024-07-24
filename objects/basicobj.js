// Forma simples de criar objeto.
const pessoa = {
    nome: 'Nathan',
    sobrenome: 'Ferdinando',
    idade: 22,

    // Método
    getNascimento() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.idade
    }
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome)
console.log(pessoa.getNascimento())


// Função construtora de objeto
const carro = new Object();
carro.nome = 'Corolla';
carro.marca = 'Toyota';

// Método
carro.falarDefeito = function () {
    return (`${this.nome} está com defeito no carburador`);
}

delete carro.marca //Deletar um campo de um objeto

console.log(carro);
carro.falarDefeito();

// Factory functions -> Relembrando
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },
    }
}

const p1 = criaPessoa('Nathan', 'Ferdinando');
console.log(p1.nomeCompleto);

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)  // Não permite que o objeto seja alterado...
}

const pc1 = new Pessoa('Nathan', 'Ferdinando')
const pc2 = new Pessoa('Maria', 'Oliveira')

console.log(pc1);
console.log(pc2);