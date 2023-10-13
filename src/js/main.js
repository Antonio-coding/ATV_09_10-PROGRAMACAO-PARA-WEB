// main.js

import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';
import { verHistoricoTransacoes } from "./components/extrato.js";
import { handleEntrar } from './components/Validation.js';
import './components/extrato.js';
import { atualizarBotoesConta, criarEExibirContas, handleDeposito, handleSaque } from './components/transacoes.js';


criarEExibirContas(localStorage.setItem('agencia', 'numero', "tipo", 'saldo'));

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


    const verHistoricoTransacoesElement = document.getElementById('exibirExtrato');

    if (verHistoricoTransacoesElement) {
        verHistoricoTransacoesElement.onclick = function () {
            const historico = document.getElementById("historico");

            if (extratoVisivel) {
                // Extrato está visível, então oculte
                historico.style.display = "none";
                extratoVisivel = false;
            } else {
                // Extrato não está visível, então exiba
                historico.style.display = "block";
                extratoVisivel = true;

                verHistoricoTransacoes();
            }
        }
    }

    const tipoContaSelectElement = document.getElementById('tipo');
    const cartaoCreditoButton = document.getElementById('cartaoCreditoButton');

    if (tipoContaSelectElement) {
        tipoContaSelectElement.addEventListener("change", () => {
            const selectedValue = tipoContaSelectElement.value;
            if (selectedValue === "corrente") {
                cartaoCreditoButton.style.display = "block";
            } else {
                cartaoCreditoButton.style.display = "none";
            }
        });
    }

    const ativarCartaoCreditoButtonElement = document.getElementById('ativarCartaoCredito');


    if (ativarCartaoCreditoButtonElement) {
        ativarCartaoCreditoButtonElement.onclick = function () {
            ativarCartaoDeCreditoDaContaCorrente();
        }
    }

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

    document.addEventListener("DOMContentLoaded", () => {

        handleDeposito();
        handleSaque();
        atualizarBotoesConta();
    })
});