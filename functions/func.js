
// Funçoes são objetos de primeira classe
function falaOi() {
    console.log('Olá mundo!')
}

falaOi();

const nome = function falaOi() {
    console.log('Olá mundo!')
}

nome();

function execFunc (funcao) {
    funcao();
}

execFunc(nome);
//----------------------------------------------------------------------------------------------------------------------------------------------------

// Arrow function
const arrowFunc = () => {
    console.log('Sou uma arrow function!')
}

arrowFunc();
//----------------------------------------------------------------------------------------------------------------------------------------------------

// Funçaõ dentro de um objeto
const obj = {
    falar() {
        console.log('Olá, meu nome é Nathan Ferdinando');
    }
}

obj.falar();
//----------------------------------------------------------------------------------------------------------------------------------------------------

// Função ultilizando variavel arguments
function cArguments () {
    console.log(arguments[0]);
}

cArguments('Nathan Ferdinando', 'Idade: 22', 'Ultimo nome: Ferdinando');
// --------------------------------------------------------------------------------------





