// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode alterar
            configurable: true // Pode reconfigurar
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode alterar
            configurable: true // Pode reconfigurar
        },
    })
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Pode alterar
        configurable: true // Pode reconfigurar
    })

}                   

const pOne = new Produto('Camiseta', 20, 3)
console.log(pOne)
console.log(Object.keys(pOne)) // keys() mostra as chaves de um objeto...
