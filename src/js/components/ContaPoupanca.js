import { ContaBancaria } from "./ContaBancaria.js";


export class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, tipo = "Conta Poupança", saldo = 0) {
    super(agencia, numero, tipo, saldo);
  }
}
