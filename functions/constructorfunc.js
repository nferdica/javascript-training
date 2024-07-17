// Função construtora
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    
    // Atributos ou métodos privados, não podem ser acessados fora da função!
    const id = Math.random();
    const metodoInterno = function () {

    };
    

    // Atributos ou métodos públicos, podem ser acessados fora da função!
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ' sou um método')
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


const p1 = new Pessoa('Nathan', 'Ferdinando');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();