const ContaBancaria = require("./ContaBancaria");


class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, tipo = "Conta Universitária", saldo = 0) {
      super(agencia, numero, tipo, saldo);
    }
  
    
    sacar(valor) {
      if (valor > 0 && valor <= 500) {
        if (valor <= this._saldo) {
          this._saldo -= valor;
          return true;
        } else {
          console.log("Saldo insuficiente.");
          return false;
        }
      } else {
        console.log("Valor de saque inválido. O saque deve ser menor ou igual a 500 reais.");
        return false;
      }
    }
  }
  

  const minhaContaUniversitaria = new ContaUniversitaria("003", "67890");
  
  console.log("Agência da Conta Universitária: " + minhaContaUniversitaria.agencia);
  console.log("Número da Conta Universitária: " + minhaContaUniversitaria.numero);
  console.log("Tipo da Conta Universitária: " + minhaContaUniversitaria.tipo);
  console.log("Saldo da Conta Universitária: " + minhaContaUniversitaria.saldo);
  
  minhaContaUniversitaria.depositar(1000); 
  console.log("Novo Saldo após depósito de 1000 reais: " + minhaContaUniversitaria.saldo);
  
  if (minhaContaUniversitaria.sacar(300)) {
    console.log("Saque de 300 reais bem-sucedido. Novo Saldo: " + minhaContaUniversitaria.saldo);
  } else {
    console.log("Tentativa de saque de 300 reais falhou. Saldo atual: " + minhaContaUniversitaria.saldo);
  }
  
  if (minhaContaUniversitaria.sacar(800)) {
    console.log("Saque de 800 reais bem-sucedido. Novo Saldo: " + minhaContaUniversitaria.saldo);
  } else {
    console.log("Tentativa de saque de 800 reais falhou. Saldo atual: " + minhaContaUniversitaria.saldo);
  }
  

  module.exports = ContaUniversitaria;