
import { ContaBancaria } from './ContaBancaria.js';


export class ContaUniversitaria extends ContaBancaria {
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
  

 