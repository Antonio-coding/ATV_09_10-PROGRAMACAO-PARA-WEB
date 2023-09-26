const ContaBancaria = require("./ContaBancaria");

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, tipo = "Conta Poupança", saldo = 0) {
      super(agencia, numero, tipo, saldo);
    }
  }
  

  const minhaContaPoupanca = new ContaPoupanca("002", "54321");
  
  console.log("Agência da Conta Poupança: " + minhaContaPoupanca.agencia);
  console.log("Número da Conta Poupança: " + minhaContaPoupanca.numero);
  console.log("Tipo da Conta Poupança: " + minhaContaPoupanca.tipo);
  console.log("Saldo da Conta Poupança: " + minhaContaPoupanca.saldo);
  
  module.exports = ContaPoupanca;