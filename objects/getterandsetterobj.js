// Ultilizando getter e setter.

function Produto(nome, preco, estoque) {
    
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave   
        configurable: true, // Pode reconfigurar
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') { // Tipo de valor for diferente de number...
                throw new TypeError('Isso não é um numero') // Caso essa condição seja verdadeira vai gerar um erro no console.
            }
            estoque = valor;
        }
    })

}                   

const pOne = new Produto('Camiseta', 20, 3)
pOne.estoque = 1000;
console.log(pOne.estoque)


