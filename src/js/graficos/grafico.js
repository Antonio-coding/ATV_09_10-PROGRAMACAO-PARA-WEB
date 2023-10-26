// grafico.js

document.addEventListener("DOMContentLoaded", () => {
  // Recupere o histórico de transações do armazenamento local
  const historicoTransacoes = JSON.parse(localStorage.getItem('historicoTransacoes')) || [];

  // Extraia os valores e datas das transações para criar o gráfico
  const labels = historicoTransacoes.map((transacao) => transacao.data);
  const data = historicoTransacoes.map((transacao) => transacao.valor);

  // Obtenha o elemento do gráfico no HTML
  const ctx = document.getElementById('graficoTransacoes');

  // Crie um gráfico de linha com base nos dados
  new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              label: 'Histórico de Transações',
              data: data,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
