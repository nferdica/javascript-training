// Construtora -> molde (classe)
function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// Prototype é a mesma coisa que __proto__
// Prototype é usado para armazenar métodos que são repetidos na criação das instancias...

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

// Instancia

const pessoa1 = new Pessoa('Luiz', 'Tedardi'); // <- Pessoa função construtora
const pessoa2 = new Pessoa('Nathan', 'Ferdinando'); // <- Pessoa função construtora
const data = new Date() // <- Função construtora

console.log(pessoa2.nomeCompleto())
console.log(data)