// Função que calcula idade

function calcIdade (nascimento) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const idadeAtual = anoAtual - nascimento;
    return idadeAtual; 
}

console.log('Voce tem atualmente ' + (calcIdade(2002)) + ' anos de idade!');
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Função que calcula idade ultilizando return
function calcIdade (nascimento) {
    return function (anoatual) {
        return anoatual - nascimento
    }
}

const idade = calcIdade(2002)
console.log(idade(2024));
//----------------------------------------------------------------------------------------------------------------------------------------------------