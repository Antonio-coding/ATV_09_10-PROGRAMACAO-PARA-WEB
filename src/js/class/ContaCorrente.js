import { ContaBancaria } from "./ContaBancaria";

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


const minhaContaCorrente = new ContaCorrente("001", "12345", true);


console.log("Agência da Conta Corrente: " + minhaContaCorrente.agencia);
console.log("Número da Conta Corrente: " + minhaContaCorrente.numero);
console.log("Tipo da Conta Corrente: " + minhaContaCorrente.tipo);
console.log("Cartão de Crédito da Conta Corrente: " + minhaContaCorrente.cartaoCredito); 
minhaContaCorrente.cartaoCredito = false; 
console.log("Novo estado do Cartão de Crédito da Conta Corrente: " + minhaContaCorrente.cartaoCredito); 

