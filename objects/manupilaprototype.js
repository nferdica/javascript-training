const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objB.chaveA)
console.log(objC.chaveB)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.diminuiPreco = function (porcDim) {
    return this.preco = this.preco - (this.preco * (porcDim / 100))
}

Produto.prototype.aumentaPreco = function (porcAum) {
    return this.preco = this.preco + (this.preco * (porcAum / 100))
}

const produtoOne = new Produto('Camiseta', 75.00)

console.log('O preço da camiseta com desconto é ' + produtoOne.diminuiPreco(50).toFixed(2))
console.log('O preço da camiseta com desconto é ' + produtoOne.aumentaPreco(50).toFixed(2))

