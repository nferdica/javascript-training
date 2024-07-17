// Gerando numero random entre 1000 & 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout (function(){
        console.log('f1');
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout (function(){
        console.log('f2');
        if (callback) callback();
    }, rand())
}

function f3(callback) {
    setTimeout (function(){
        console.log('f3');
        if (callback) callback();
    }, rand())
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Ultilizando callback
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá, mundo - Me chamo Nathan Ferdinando')
        })
    })
})
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Ultilizando callback de outra forma
f1(f1Call)

function f1Call(){
    f2(f2Call);
}

function f2Call(){
    f3(f3Call);
}

function f3Call(){
    console.log('Olá, mundo - Eu sou um desenvolvedor back-end')
}
//----------------------------------------------------------------------------------------------------------------------------------------------------



