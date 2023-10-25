// transacao.js

// Função para criar e exibir contas
export function criarEExibirContas() {
    const agenciaCorrente = localStorage.getItem('agenciaCorrente');
    const numeroCorrente = localStorage.getItem("numeroCorrente");
    const saldoCorrente = parseFloat(localStorage.getItem("saldoCorrente"));
    minhaContaCorrente = new ContaCorrente(agenciaCorrente, numeroCorrente, saldoCorrente, true);

    const agenciaPoupanca = localStorage.getItem("agenciaPoupanca");
    const numeroPoupanca = localStorage.getItem("numeroPoupanca");
    const saldoPoupanca = parseFloat(localStorage.getItem("saldoPoupanca"));
    minhaContaPoupanca = new ContaPoupanca(agenciaPoupanca, numeroPoupanca, saldoPoupanca);

    const agenciaUniversitaria = localStorage.getItem("agenciaUniversitaria");
    const numeroUniversitaria = localStorage.getItem("numeroUniversitaria");
    const saldoUniversitaria = parseFloat(localStorage.getItem("saldoUniversitaria"));
    minhaContaUniversitaria = new ContaUniversitaria(agenciaUniversitaria, numeroUniversitaria, saldoUniversitaria);

    // Atualiza o estado dos botões com base no tipo de conta selecionado
    atualizarBotoesConta();
}

export function handleDeposito() {
    const valorDeposito = parseFloat(document.getElementById("valor").value);
    const tipoContaSelecionado = tipoContaSelect.value;

    if (tipoContaSelecionado === "corrente") {
        minhaContaCorrente.depositar(valorDeposito);
    } else if (tipoContaSelecionado === "poupanca") {
        minhaContaPoupanca.depositar(valorDeposito);
    } else if (tipoContaSelecionado === "universitaria") {
        minhaContaUniversitaria.depositar(valorDeposito);
    }
    
    // Atualiza o saldo no localStorage
    localStorage.setItem('saldo' + tipoContaSelecionado.charAt(0).toUpperCase() + tipoContaSelecionado.slice(1), minhaContaCorrente.saldo);

    // Atualiza a exibição do saldo
    exibirSaldo();
}

export function handleSaque() {
    const valorSaque = parseFloat(document.getElementById("valor").value);
    const tipoContaSelecionado = tipoContaSelect.value;

    if (tipoContaSelecionado === "corrente") {
        minhaContaCorrente.sacar(valorSaque);
    } else if (tipoContaSelecionado === "poupanca") {
        minhaContaPoupanca.sacar(valorSaque);
    } else if (tipoContaSelecionado === "universitaria") {
        minhaContaUniversitaria.sacar(valorSaque);
    }
    
    // Atualiza o saldo no localStorage
    localStorage.setItem('saldo' + tipoContaSelecionado.charAt(0).toUpperCase() + tipoContaSelecionado.slice(1), minhaContaCorrente.saldo);

    // Atualiza a exibição do saldo
    exibirSaldo();
}
