// validation.js

// Função para validar os campos e redirecionar para a página de extrato
function validarCampos() {

    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;

    if (agencia && numero) {
        // Redirecione para a página de extrato
        window.location.href = "../pages/extrato.html";
        return true;

    } else {
        alert("Preencha todos os campos para acessar o extrato.");
        return false;
    }

}
// Função para lidar com a ação "Entrar"
export function handleEntrar() {
    if (validarCampos()) {
        const agencia = document.getElementById("agencia").value;
        const numero = document.getElementById("numero").value;
        const tipo = document.getElementById("tipo").value;

        // Define o saldo inicial com base no tipo de conta selecionado
        let saldo = 0;
        if (tipo === "universitaria") {
            saldo = 100; // Saldo inicial da conta universitária
        } else if (tipo === "corrente") {
            saldo = 500; // Saldo inicial da conta corrente
        } else if (tipo === "poupanca") {
            saldo = 1000; // Saldo inicial da conta poupança
        }

        // Armazena os valores no localStorage
        localStorage.setItem('agencia', agencia);
        localStorage.setItem('numero', numero);
        localStorage.setItem('tipo', tipo);

        // Importante: você deve usar uma chave específica para o saldo de cada tipo de conta
        if (tipo === "corrente") {
            localStorage.setItem('saldoCorrente', saldo);
        } else if (tipo === "poupanca") {
            localStorage.setItem('saldoPoupanca', saldo);
        } else if (tipo === "universitaria") {
            localStorage.setItem('saldoUniversitaria', saldo);
        }

        // Redireciona para a página de extrato
        window.location.href = "../pages/extrato.html";
    }
}
