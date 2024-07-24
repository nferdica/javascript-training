// Factory functions
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto (valor) {
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala: function (assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,

        // Getter
        get imc () { // O get serve para transformar a função em um atributo do objeto.
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2) // A função toFixed serve para retornar apenas duas casas decimais após a virgula!
        }
    };
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// O 'this' sempre vai se referir a quem fez a chamada, segue os exemplos abaixo
const p1 = criaPessoa('Nathan', 'Ferdinando', 1.81, 90);

// Utilizando o Setter
p1.nomeCompleto = 'Maria Clara'

// Utilizando o Getter
console.log(p1.nomeCompleto);
console.log(p1.imc);
