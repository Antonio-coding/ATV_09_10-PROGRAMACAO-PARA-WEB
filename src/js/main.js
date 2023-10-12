
// Importe os módulos necessários
import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';
import { ContaCorrente } from './components/ContaCorrente.js';
import { ContaPoupanca } from './components/ContaPoupanca.js';
import { ContaUniversitaria } from './components/ContaUniversitaria.js';
import { ContaBancaria } from './components/ContaBancaria.js';
import { adicionarTransacao } from "./components/extrato.js";
import { validarCampos } from './components/Validation.js';
import './components/extrato.js';

// Função para lidar com a ação "Entrar"
function handleEntrar() {
    if (validarCampos()) {
        const agencia = document.getElementById("agencia").value;
        const numero = document.getElementById("numero").value;
        const saldo = 1000;

        // Armazena os valores no localStorage
        localStorage.setItem('agencia', agencia);
        localStorage.setItem('numero', numero);
        localStorage.setItem('saldo', saldo);

        const conta = new ContaBancaria(agencia, numero, saldo);

        console.log("Nova conta criada:", conta);

        // Redirecione para a página de extrato
        window.location.href = "../pages/extrato.html";
    }
}

// Função para lidar com o link de extrato
function handleExtratoLink(event) {
    // Verifique se o usuário está logado (se os valores existem no localStorage)
    const agencia = localStorage.getItem('agencia');
    const numero = localStorage.getItem('numero');

    if (!agencia || !numero) {
        event.preventDefault();
        alert("Você precisa fazer login para acessar o extrato.");
    }
}

// Função para criar e exibir contas
function criarEExibirContas(agencia, numero) {
    const minhaContaCorrente = new ContaCorrente(agencia, numero, true);
    const minhaContaPoupanca = new ContaPoupanca(agencia, numero);
    const minhaContaUniversitaria = new ContaUniversitaria(agencia, numero);

    console.log("Conta corrente: " + minhaContaCorrente.saldo);
    console.log("Conta Poupanca: " + minhaContaPoupanca.saldo);
    console.log("Conta Universitaria: " + minhaContaUniversitaria.saldo);
}

document.addEventListener("DOMContentLoaded", () => {
    includeFooter();
    includeHeader();
    adicionarTransacao();
    handleEntrar();
    

    const agencia = localStorage.getItem('agencia');
    const numero = localStorage.getItem('numero');
    const saldo = parseFloat(localStorage.getItem('saldo'));

    const saldoAtualElement = document.getElementById("saldoAtual");
    if (saldoAtualElement) {
        saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
    }

    const agenciaExtratoElement = document.getElementById("agenciaExtrato");
    if (agenciaExtratoElement) {
        agenciaExtratoElement.textContent = agencia;
    }

    const numeroExtratoElement = document.getElementById("numeroExtrato");
    if (numeroExtratoElement) {
        numeroExtratoElement.textContent = numero;
    }

    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleInstructions);
    }

    const extratoLink = document.getElementById("extrato");
    if (extratoLink) {
        extratoLink.addEventListener('click', handleExtratoLink);
    }

    // Crie e exiba as contas
    criarEExibirContas(agencia, numero);

   
});
