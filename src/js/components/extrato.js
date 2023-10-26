// extrato.js

const depositarButton = document.getElementById("depositar");
const sacarButton = document.getElementById("sacar");
const saldoAtualElement = document.getElementById("saldoAtual");
let saldo = parseFloat(localStorage.getItem('saldo'));



if (depositarButton) {
    depositarButton.addEventListener('click', () => {
        const valorElement = document.getElementById("valor");
        if (valorElement) {
            const valor = parseFloat(valorElement.value);
            if (isNaN(valor) || valor <= 0) {
                alert("Valor de depósito inválido.");
                return;
            }
            saldo += valor;
            if (saldoAtualElement) {
                saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
            }
            localStorage.setItem('saldo', saldo);

            // Cria a transação de depósito
            const transacaoDeposito = {
                data: new Date(),
                tipo: 'Depósito',
                valor: valor
            };

            // Chama a função para adicionar essa transação ao histórico
            adicionarTransacao(transacaoDeposito);
            console.log("Nova transacao Deposito:", transacaoDeposito);
        }
    });
}

if (sacarButton) {
    sacarButton.addEventListener('click', () => {
        const valorElement = document.getElementById("valor");
        if (valorElement) {
            const valor = parseFloat(valorElement.value);
            if (isNaN(valor) || valor <= 0 || valor > saldo) {
                alert("Saldo insuficiente ou valor inválido.");
                return;
            }
            saldo -= valor;
            if (saldoAtualElement) {
                saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
            }
            localStorage.setItem('saldo', saldo);

            // Cria a transação de saque
            const transacaoSaque = {
                data: new Date(),
                tipo: 'Saque',
                valor: valor
            };

            // Chama a função para adicionar essa transação ao histórico
            adicionarTransacao(transacaoSaque);
            console.log("Nova transacao Saque:", transacaoSaque);
        }
    });
}



function adicionarTransacao(transacao) {
    let historicoTransacoes = JSON.parse(localStorage.getItem('historicoTransacoes')) || []; // Inicialize como um array vazio se não existir
    historicoTransacoes.push(transacao);
    localStorage.setItem('historicoTransacoes', JSON.stringify(historicoTransacoes));
}




export function exibirSaldo() {
    const tipoConta = localStorage.getItem('tipo');
    const saldo = parseFloat(localStorage.getItem('saldo'));
    const saldoAtualElement = document.getElementById("saldoAtual");

    if (saldoAtualElement) {
        saldoAtualElement.textContent = `Saldo Atual (${tipoConta}): R$ ${saldo.toFixed(2)}`;
    }
}


