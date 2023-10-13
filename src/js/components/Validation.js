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
        const saldo = 0;

        // Armazena os valores no localStorage
        localStorage.setItem('agencia', agencia);
        localStorage.setItem('numero', numero);
        localStorage.setItem('saldo', saldo);

        const conta = new ContaBancaria(agencia, numero, saldo);

        console.log("Nova conta criada:", conta);



    }
}