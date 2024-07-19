class Dispositivo {
    constructor (nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado!')
            return;
        };
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado!')
            return;
        };
        this.ligado = false;
    }
}

class Celular extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome) // Faz o mesmo papel de call() nas funções construtoras
        this.cor = cor;
        this.modelo = modelo;
    }
}

const dispOne = new Celular('Iphone', 'Preto', '15 Plus')
console.log(dispOne)
