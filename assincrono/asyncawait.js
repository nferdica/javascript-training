function rand(min = 0, max = 3) {
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

async function executa() { // async e await substitui o then, tornando o codigo mais organizado e menos verboso.
    try { // Usamos try e catch para capturar o erro com reject promises.
        
        const f1 = await esperaAi('Fase 1', rand())
        console.log(f1)
        
        const f2 = await esperaAi('Fase 2', rand())
        console.log(f2)
        
        const f3 = await esperaAi('Fase 3', rand())
        console.log(f3)

        console.log('Terminamos aqui') 
    
    } catch(e) {
        console.log(e)
    } 
}

executa()

// Estados da promise.
// Pending -> Pendente
// Fullfield -> Resolvida
// Rejected -> Rejeitada