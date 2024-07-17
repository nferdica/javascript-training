// IIFE - Immediately invoked function expression
(function(idade, peso, altura){
    
    const sobrenome = 'Ferdinando'

    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome () {
        console.log(criaNome('Nathan'))
    }

    falaNome();
    console.log('Eu tenho'+ ' ' + idade + ' ' + 'anos' +
        '\n' + 'Peso: '+ peso +
        '\n' + 'Altura: ' + altura)

})(22, 90, 1.81);
//----------------------------------------------------------------------------------------------------------------------------------------------------
