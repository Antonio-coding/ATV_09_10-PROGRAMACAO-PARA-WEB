// validation.js

// Função para validar os campos e redirecionar para a página de extrato
function validarCampos() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;

    // Verifique se ambos os campos estão preenchidos
    if (agencia && numero) {
        // Redirecione para a página de extrato
        window.location.href = "src/pages/extrato.html";
    } else {
        // Mostre um alerta pedindo que todos os campos sejam preenchidos
        alert("Preencha todos os campos para acessar o extrato.");
    }
}

// Adicione um ouvinte de evento para o botão "Entrar"
document.getElementById("inserir").addEventListener("click", validarCampos);
