class Conta{
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;

    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

    
}

class ContaEspecial extends Conta{
    constructor(saldoCC,saldoCP,juros){
        super(saldoCC,saldoCP, juros*2)
    }
}

let conta = new Conta(1000,5000,1);

console.log(conta);


conta.saque(500);

console.log(conta);

conta.transferenciaCP(200);

console.log(conta);

conta.transferenciaCC(200);

console.log(conta);

conta.jurosAniversario();

console.log(conta);

let conta2 = new ContaEspecial(10000, 7000, 1);

console.log(conta2);

conta2.saque(2000);

console.log(conta2);

conta2.jurosAniversario();

console.log(conta2);

