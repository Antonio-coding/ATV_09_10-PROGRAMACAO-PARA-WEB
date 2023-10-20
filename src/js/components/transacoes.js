// transacoes.js

import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { ContaUniversitaria } from './ContaUniversitaria.js';

const tipoContaSelect = document.getElementById("tipo");
const depositarButton = document.getElementById("depositar");
const sacarButton = document.getElementById("sacar");

// Declare as variáveis globais para armazenar as contas
let minhaContaCorrente;
let minhaContaPoupanca;
let minhaContaUniversitaria;

// Função para criar e exibir contas
export function criarEExibirContas(agencia, numero, saldo) {
    // Obtenha os valores do localStorage quando criar as instâncias
    const agenciaCorrente = localStorage.getItem('agenciaCorrente');
    const numeroCorrente = localStorage.getItem("numeroCorrente");
    const saldoCorrente = parseFloat(localStorage.getItem("saldoCorrente"));
    minhaContaCorrente = new ContaCorrente(agenciaCorrente, numeroCorrente, saldoCorrente, true);

    const agenciaPoupanca = localStorage.getItem("agenciaPoupanca");
    const numeroPoupanca = localStorage.getItem("numeroPoupanca");
    const saldoPoupanca = parseFloat(localStorage.getItem("saldoPoupanca"));
    minhaContaPoupanca = new ContaPoupanca(agenciaPoupanca, numeroPoupanca, saldoPoupanca);

    const agenciaUniversitaria = localStorage.getItem("agenciaUniversitaria");
    const numeroUniversitaria = localStorage.getItem("numeroUniversitaria");
    const saldoUniversitaria = parseFloat(localStorage.getItem("saldoUniversitaria"));
    minhaContaUniversitaria = new ContaUniversitaria(agenciaUniversitaria, numeroUniversitaria, saldoUniversitaria);

    console.log("Conta Corrente: ", minhaContaCorrente);
    console.log("Conta Poupança: ", minhaContaPoupanca);
    console.log("Conta Universitária: ", minhaContaUniversitaria);
}


export function handleDeposito() {
    const valorDeposito = parseFloat(document.getElementById("valor").value);
    const tipoContaSelecionado = tipoContaSelect.value;

    if (tipoContaSelecionado === "corrente") {
        minhaContaCorrente.depositar(valorDeposito);
    } else if (tipoContaSelecionado === "poupanca") {
        minhaContaPoupanca.depositar(valorDeposito);
    } else if (tipoContaSelecionado === "universitaria") {
        minhaContaUniversitaria.depositar(valorDeposito);
    }
}

export function handleSaque() {
    const valorSaque = parseFloat(document.getElementById("valor").value);
    const tipoContaSelecionado = tipoContaSelect.value;

    if (tipoContaSelecionado === "corrente") {
        minhaContaCorrente.sacar(valorSaque);
    } else if (tipoContaSelecionado === "poupanca") {
        minhaContaPoupanca.sacar(valorSaque);
    } else if (tipoContaSelecionado === "universitaria") {
        minhaContaUniversitaria.sacar(valorSaque);
    }
}


// Função para ativar/desativar os botões com base no tipo de conta selecionado
export function atualizarBotoesConta() {
    const tipoContaSelecionado = tipoContaSelect.value;
    if (tipoContaSelecionado === "corrente") {
        depositarButton.disabled = false;
        sacarButton.disabled = false;
    } else if (tipoContaSelecionado === "poupanca") {
        depositarButton.disabled = true;
        sacarButton.disabled = true;
    } else if (tipoContaSelecionado === "universitaria") {
        depositarButton.disabled = true;
        sacarButton.disabled = false;
    }
}
