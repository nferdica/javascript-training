// Função de soma ultilizando argumentos.
function sun () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
console.log(total)
}

sun(100, 2000, 3000, 4000, 50006, 2000);
//----------------------------------------------------------------------------------------------------------------------------------------------------