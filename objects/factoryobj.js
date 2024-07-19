// Métodos armazenados em variaveis...
const falar = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },
  };
  
const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`);
    },
};
  
const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
};
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Métodos sendo movidos para variavel pessoaPrototype
const pessoaPrototype = Object.assign({}, falar, comer, beber);
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Factory function
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


const people = criaPessoa('Nathan', 'Ferdinando');
console.log(people.nome)

