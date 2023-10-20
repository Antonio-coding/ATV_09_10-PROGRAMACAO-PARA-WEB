let extratoVisivel = false; // Certifique-se de que extratoVisivel seja definido


export function toggleHistoricoTransacoes() {
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
        };
    }
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

