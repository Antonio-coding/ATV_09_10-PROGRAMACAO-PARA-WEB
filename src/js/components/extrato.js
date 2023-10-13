const depositarButton = document.getElementById("depositar");
const sacarButton = document.getElementById("sacar");
const saldoAtualElement = document.getElementById("saldoAtual");
let saldo = parseFloat(localStorage.getItem('saldo'));

if (saldoAtualElement) {
    saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
}

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

// Função para exibir o histórico de transações
export function verHistoricoTransacoes() {
    const historicoUl = document.getElementById("historico");
    const historicoTransacoes = localStorage.getItem('historicoTransacoes');
    if (historicoUl && historicoTransacoes) {
        const transacoes = JSON.parse(historicoTransacoes);
        historicoUl.innerHTML = ""; // Limpe o histórico atual

        for (const transacao of transacoes) {
            if (transacao && transacao.data && typeof transacao.valor === 'number') {
                const transacaoElement = document.createElement("li");
                const cor = transacao.tipo === 'Saque' ? 'red' : 'blue'; // Define a cor com base no tipo
                transacaoElement.innerHTML = `
                    <span style="color: ${cor};">${transacao.tipo}</span>:
                    <strong>${transacao.valor.toFixed(2)}</strong><br>
                    <span style="font-size: 12px;">${formatarDataHora(transacao.data)}</span>
                `;
                historicoUl.appendChild(transacaoElement);
                historicoUl.appendChild(document.createElement("hr"));
            }
        }
    }
}

function formatarDataHora(data) {
    const dataFormatada = new Date(data).toLocaleDateString();
    const horaFormatada = new Date(data).toLocaleTimeString();
    return `${dataFormatada} - ${horaFormatada}`;
}


// Verifique se o histórico de transações já existe no localStorage
let historicoTransacoes = JSON.parse(localStorage.getItem('historicoTransacoes'));

if (!historicoTransacoes) {
    historicoTransacoes = [];
}

function adicionarTransacao(transacao) {
    historicoTransacoes.push(transacao);
    localStorage.setItem('historicoTransacoes', JSON.stringify(historicoTransacoes));
}
