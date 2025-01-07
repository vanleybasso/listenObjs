class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }


}

let conta = new Conta (5000);

conta.deposito(3000);
console.log(conta.saldo);

conta.saque(2000);

console.log(conta.saldo);