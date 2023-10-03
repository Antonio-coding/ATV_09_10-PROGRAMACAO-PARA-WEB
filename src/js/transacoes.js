// ATV 06_Simulação de Conta Bancária 

let saldo = 1000;
const historicoTransacoes = [];
let saldoVisivel = false; // Variável para controlar se o saldo está visível

export function adicionarValor() {
  const valorInput = document.getElementById("valor");
  const valor = parseFloat(valorInput.value);
  valorInput.value = ""; // Limpar o campo de valor após adicionar

  const acaoSelecionada = document.getElementById("acao").value;

  if (acaoSelecionada === "1" || acaoSelecionada === "2") {
    document.getElementById("valor-input").style.display = "none"; // Esconder o campo de valor após adicionar
  }

  if (acaoSelecionada === "1") {
    // Depositar
    saldo += valor;
    const transacao = {
      tipo: "Depósito",
      valor,
      data: new Date().toLocaleString()
    };
    historicoTransacoes.push(transacao);
    atualizarSaldoNaTela();
  } else if (acaoSelecionada === "2") {
    // Sacar
    if (valor > saldo) {
      alert("Saldo insuficiente para realizar o saque.");
      return;
    }
    saldo -= valor;
    const transacao = {
      tipo: "Saque",
      valor,
      data: new Date().toLocaleString()
    };
    historicoTransacoes.push(transacao);
    atualizarSaldoNaTela();
  } else {
    alert("Selecione ação: Depositar ou Sacar antes de adicionar um valor.");
  }
}

function verHistoricoTransacoes() {
  const historicoDiv = document.getElementById("historico");
  historicoDiv.innerHTML = "<h3>Histórico de Transações</h3>";

  for (const transacao of historicoTransacoes) {
    const transacaoElement = document.createElement("p");
    transacaoElement.textContent = `${transacao.data} - ${
      transacao.tipo
    }: R$${transacao.valor.toFixed(2)}`;
    historicoDiv.appendChild(transacaoElement);
  }
}

function atualizarSaldoNaTela() {
  const saldoDiv = document.getElementById("saldo");

  if (saldoVisivel) {
    saldoDiv.textContent = `Saldo Atual: R$${saldo.toFixed(2)}`;
  } else {
    saldoDiv.textContent = 'Saldo oculto. Clique em "Ver Saldo" para exibir.';
  }
}

function realizarAcao() {
  const acaoSelecionada = document.getElementById("acao").value;

  if (acaoSelecionada === "4") {
    // Ver Histórico de Transações
    verHistoricoTransacoes();
  } else if (acaoSelecionada === "3") {
    // Ver Saldo
    saldoVisivel = !saldoVisivel; // Inverte o estado de visibilidade do saldo
    atualizarSaldoNaTela();
  } else if (acaoSelecionada === "5") {
    // Sair
    if (confirm("Você está saindo da sua conta. Deseja continuar?")) {
      saldo = 0;
      historicoTransacoes.length = 0;
      atualizarSaldoNaTela();
      verHistoricoTransacoes();
      document.getElementById("acao").style.display = "none"; // Esconder o seletor de ações
      document.getElementById("valor-input").style.display = "none"; // Esconder o campo de valor
      document.getElementById("output").textContent = "Você saiu da sua conta.";
    }
  } else {
    document.getElementById("valor-input").style.display = "block"; // Mostrar o campo de valor
    document.getElementById("output").textContent = "";
  }
}

// Inicialmente, o saldo está oculto
atualizarSaldoNaTela();
