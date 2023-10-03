import { saldo } from './../transacoes';


function ContaBancaria() {
  constructor(agencia, numero, tipo = "ContaCorrente", saldo = 0) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo; // Usamos um atributo privado comummente com prefixo _ para o saldo
  }

    // Getter para obter o saldo
    get saldo() {
    return this._saldo;
  }

    // Setter para definir o saldo
    set saldo(valor) {
    this._saldo = valor;
  }

  // Método para sacar dinheiro
  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      return true;
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
      return false;
    }
  }

  // Método para depositar dinheiro
  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      return true;
    } else {
      console.log("Valor de depósito inválido.");
      return false;
    }
  }
};

