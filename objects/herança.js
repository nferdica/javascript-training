// Produto -> Aumento, desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Prototypes Produto()
Produto.prototype.aumentoPreco = function (valueAum) {
    this.preco += valueAum
}

Produto.prototype.diminuiPreco = function (valueDim) {
    this.preco -= valueDim
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) // Linkando função Produto() dentro da função Camiseta()
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype) // Linkando prototype de Camiseta() com Produto()
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    }) 
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 10.5, 'Preta')
const caneca = new Caneca('Caneca preta', 20.5, 'Porcelana', 20)

console.log(camiseta)
caneca.estoque = 40
console.log(caneca)

