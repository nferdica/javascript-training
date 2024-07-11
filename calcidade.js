function calcIdade (nascimento) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const idadeAtual = anoAtual - nascimento;
    return idadeAtual; 
}

console.log('Voce tem atualmente ' + (calcIdade(2002)) + ' anos de idade!');