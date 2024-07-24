// import * as newindex.js from './modelone' -> Desta maneira vamos importar tudo que esta dentro de modelone para dentro de um objeto!
import multiplica, {nome, sobrenome, idade, soma, Pessoa} from './modelone'

const newPessoa = new Pessoa('Nathan', 'Ferdinando')
console.log(newPessoa)

console.log(multiplica(5, 5))
console.log(nome, sobrenome, idade)
console.log(soma(20, 40))