// Promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 

        setTimeout(() => {
            
            if(typeof msg !== 'string') {
                reject('Value not found')
                return;
            }

            resolve(msg)
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
]

Promise.race(promises).then((valor) => {
    console.log(valor)
}).catch((erro) => {
    console.log(erro)
})

function baixarPagina () {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Pagina em cache')
    }else {
        return esperaAi('Baixei a pagina', rand(1, 5))
    }
}

baixarPagina().then(dadosPagina => {
    console.log(dadosPagina)
}).catch((e) => {
    console.log(e)
})