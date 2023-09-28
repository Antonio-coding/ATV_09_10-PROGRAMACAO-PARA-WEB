// Importe os módulos necessários
import { funcaoDoFormulario } from './formulario.js';
import { ContaCorrente, ContaPoupanca, ContaUniversitaria } from './contas.js';
import { adicionarValor, verHistoricoTransacoes, atualizarSaldoNaTela, realizarAcao } from './transacoes.js';

// Código para o formulário
funcaoDoFormulario();

// Exemplo de criação de contas
const minhaContaCorrente = new ContaCorrente("001", "12345", true);
const minhaContaPoupanca = new ContaPoupanca("002", "54321");
const minhaContaUniversitaria = new ContaUniversitaria("003", "67890");

console.log("Conta corrente: " + minhaContaCorrente.saldo);
console.log("Conta Poupanca: " + minhaContaPoupanca.saldo); 
console.log("Conta Universitaria: " + minhaContaUniversitaria.saldo);

// Código para transações
document.getElementById("acao").addEventListener('change', realizarAcao);
document.getElementById("adicionar-valor").addEventListener('click', adicionarValor);
document.getElementById("ver-historico").addEventListener('click', verHistoricoTransacoes);
document.getElementById("ver-saldo").addEventListener('click', atualizarSaldoNaTela);

// Inicialmente, o saldo está oculto
atualizarSaldoNaTela();
