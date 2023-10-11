// Importe os módulos necessários
import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';
import { validarCampos } from './components/Validation.js';

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

document.addEventListener("DOMContentLoaded", () => {
    // Inclua o cabeçalho e rodapé
    includeFooter();
    includeHeader();

    // Adicione um ouvinte de evento para o botão "Entrar"
    const el = document.getElementById("entrar");
    if (el) {
        el.addEventListener('click', handleEntrar);
    }
    
    // Recupera os valores do localStorage
    const agencia = localStorage.getItem('agencia');
    const numero = localStorage.getItem('numero');
    // Recupera o saldo do localStorage
    const saldo = parseFloat(localStorage.getItem('saldo'));

    // Exibe o saldo na página de extrato
    document.getElementById("saldoAtual").textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;


    // Exibe os valores na página de extrato
    document.getElementById("agenciaExtrato").textContent = agencia;
    document.getElementById("numeroExtrato").textContent = numero;

    // Adicione um ouvinte de evento para o botão de instruções
    const al = document.getElementById("toggleButton");
    if (al) {
        al.addEventListener('click', toggleInstructions);
    }

    // Adicione um ouvinte de evento para o link de extrato
    const extratoLink = document.getElementById("extrato");
    if (extratoLink) {
        extratoLink.addEventListener('click', handleExtratoLink);
    }
});
