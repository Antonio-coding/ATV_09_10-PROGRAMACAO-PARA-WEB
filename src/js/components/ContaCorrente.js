import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito = false) {
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }


    get cartaoCredito() {
        return this._cartaoCredito;
    }


    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}