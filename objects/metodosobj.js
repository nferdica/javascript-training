/*
Objetos são valores passados por referencia...

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... spread

Já vimos

Object.keys (Retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (Define várias propriedades)
Object.defineProperty (Define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.90}
const outroProduto = {...produto} // Forma mais simples de copiar um objeto utilizando spread operator!
const outraFormaDeCopiar = Object.assign({}, produto)

for(let entry of Object.entries(produto)) {
    console.log(entry)
}

console.log(produto);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // Verificar as propriedade de uma chave...

outroProduto.nome = 'Balde'
outroProduto.preco = 20.0
console.log(outroProduto);

outraFormaDeCopiar.nome = 'Xícara'
console.log(outraFormaDeCopiar)



