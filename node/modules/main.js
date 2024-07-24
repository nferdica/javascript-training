// Exportando módulos.

/*

Podemos exportar ultilizando:
module.exports
exports
this
module.exports = {

}

*/

const nome = 'Nathan'
const sobrenome = 'Ferdinando'

const falaNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(module.exports)