// Criação da Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Criação dos métodos do elemento principal Conta()
Conta.prototype.sacar = function (valor) {
    
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia} / ${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Criação conta corrente
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo()
}
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Criação conta poupança
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca;
//----------------------------------------------------------------------------------------------------------------------------------------------------









