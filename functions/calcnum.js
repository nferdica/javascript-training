function calcNum (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }
console.log(acumulador);
    
}

calcNum('*', 5, 5, 5);

