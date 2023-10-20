import { ContaBancaria } from "./ContaBancaria.js";

export class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero,tipo, cartaoCredito) {
        super(agencia, numero);
        this.tipo = tipo;
        this._cartaoCredito = cartaoCredito;
    }


    get cartaoCredito() {
        return this._cartaoCredito;
    }


    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}