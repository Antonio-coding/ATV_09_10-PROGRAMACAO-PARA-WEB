// main.js

import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';

import { handleEntrar } from './components/Validation.js';
import './components/extrato.js';
import { atualizarBotoesConta, criarEExibirContas, handleDeposito, handleSaque } from './components/transacoes.js';
import { configurarEventosCartaoCredito } from './components/ativarCartaoCredito.js';
import { toggleHistoricoTransacoes } from './components/toggleHistoricoTransacoes.js';


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




let extratoVisivel = false; // Variável para controlar o estado do extrato
document.addEventListener("DOMContentLoaded", () => {
    includeFooter();
    includeHeader();


    toggleHistoricoTransacoes();
    
    configurarEventosCartaoCredito();
    
    
    const entrarElement = document.getElementById('entrar')
    if (entrarElement) {
        entrarElement.addEventListener('click', handleEntrar)
    };
    
    const agencia = localStorage.getItem('agencia');
    const numero = localStorage.getItem('numero');
    const saldo = parseFloat(localStorage.getItem('saldo'));
    
    const agenciaExtratoElement = document.getElementById("agenciaExtrato");
    if (agenciaExtratoElement) {
        agenciaExtratoElement.textContent = agencia;
    }
    
    const numeroExtratoElement = document.getElementById("numeroExtrato");
    if (numeroExtratoElement) {
        numeroExtratoElement.textContent = numero;
    }

    const saldoAtualElement = document.getElementById("saldoAtual");
    if (saldoAtualElement) {
        saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
    }

    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleInstructions);
    }

    const extratoLink = document.getElementById("extrato");
    if (extratoLink) {
        extratoLink.addEventListener('click', handleExtratoLink);
    }
    
    criarEExibirContas();
    atualizarBotoesConta();
    document.addEventListener("DOMContentLoaded", () => {
        handleDeposito();
        handleSaque();
    })
});