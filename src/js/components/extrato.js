
    const depositarButton = document.getElementById("depositar");
    const sacarButton = document.getElementById("sacar");
    const saldoAtualElement = document.getElementById("saldoAtual");
    const historicoUl = document.getElementById("historico");

    if (saldoAtualElement) {
        // O elemento com o ID "saldoAtual" foi encontrado
        const saldo = parseFloat(localStorage.getItem('saldo'));
        if (!isNaN(saldo)) {
            saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
        }
    }

    if (depositarButton) {
        depositarButton.addEventListener('click', () => {
            const valorElement = document.getElementById("valor");
            if (valorElement) {
                const valor = parseFloat(valorElement.value);
                if (isNaN(valor) || valor <= 0) {
                    console.log("Valor de depósito inválido.");
                    return;
                }
                // Atualize o saldo com base na operação de depósito
                saldo += valor;
                if (saldoAtualElement) {
                    saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
                }
                // Atualize o valor no localStorage
                localStorage.setItem('saldo', saldo);
            }
        });
    }
    if (sacarButton) {
        sacarButton.addEventListener('click', () => {
            const valor = parseFloat(document.getElementById("valor").value);
            if (isNaN(valor) || valor <= 0 || valor > saldo) {
                console.log("Saldo insuficiente ou valor inválido.");
                return;
            }
            // Atualize o saldo com base na operação de saque
            saldo -= valor;
            saldoAtualElement.textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
            // Atualize o valor no localStorage
            localStorage.setItem('saldo', saldo);
        });
    };


// Função para exibir o histórico de transações
export function verHistoricoTransacoes() {
    const historicoUl = document.getElementById("historico");
    const historicoTransacoes = localStorage.getItem('historicoTransacoes');
    if (historicoTransacoes) {
        const transacoes = JSON.parse(historicoTransacoes);

        historicoUl.innerHTML = ""; // Limpe o histórico atual

        for (const transacao of transacoes) {
            if (transacao && transacao.data) { // Verifique se 'transacao' e 'transacao.data' existem
                const transacaoElement = document.createElement("li");
                transacaoElement.textContent = `${transacao.data} - ${transacao.tipo}: R$${transacao.valor.toFixed(2)}`;
                historicoUl.appendChild(transacaoElement);
            }
        }

    }
}

// Verifique se o histórico de transações já existe no localStorage
let historicoTransacoes = JSON.parse(localStorage.getItem('historicoTransacoes'));

// Se não existir, crie um novo array vazio
if (!historicoTransacoes) {
    historicoTransacoes = [];
}

// Função para adicionar uma transação ao histórico
function adicionarTransacao(transacao) {
    historicoTransacoes.push(transacao);

    // Salvar o histórico no localStorage
    localStorage.setItem('historicoTransacoes', JSON.stringify(historicoTransacoes));
}

export { adicionarTransacao };
