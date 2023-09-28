
// Trabalho da atividade 7 onde era gerenciar a orientação objeto de um sistema conta bancaria 

const ContaCorrente = require('../src/ContaCorrente');
const ContaPoupanca = require('../src/ContaPoupanca');
const ContaUniversitaria = require('../src/ContaUniversitaria');

const minhaContaCorrente = new ContaCorrente("001", "12345", true);
const minhaContaPoupanca = new ContaPoupanca("002", "54321");
const minhaContaUniversitaria = new ContaUniversitaria("003", "67890");

console.log("Conta corrente: " + minhaContaCorrente.saldo);
console.log("Conta Poupanca: " + minhaContaPoupanca.saldo); 
console.log("Conta Universitaria: " + minhaContaUniversitaria.saldo);