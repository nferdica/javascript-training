class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }

    // Métodos de instancia
    aumentarVolume () {
        this.volume += 2;
    }

    diminuirVolume () {
        this.volume -= 2;
    }

    // Métodos estáticos
    static trocaPilha () { // Podemos classificar como uma função que esta dentro de uma classe por questão de organização, para facil entendimento!
        console.log('Ok, vou trocar')
    }
}

const controlOne = new ControleRemoto('Samsung')
console.log(controlOne)