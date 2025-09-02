// 1. Classe ContaBancaria
class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.saldo = saldoInicial;
  }

  // 2. Métodos

  // Depositar valor
  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
  }

  // Sacar valor (com validação de saldo)
  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    } else {
      console.log(
        `Saldo insuficiente! Tentativa de saque de R$${valor}, saldo atual: R$${this.saldo}`
      );
    }
  }

  // Mostrar saldo
  mostrarSaldo() {
    console.log(`Saldo atual de ${this.titular}: R$${this.saldo}`);
  }
}

// 3. Criar conta com saldo inicial de R$1000
const conta1 = new ContaBancaria("Maria", 1000);

// 4. Operações
conta1.depositar(500);   // Depósito de R$500
conta1.sacar(200);       // Saque de R$200
conta1.sacar(2000);      // Saque maior que o saldo
conta1.mostrarSaldo();   // Mostrar saldo final
