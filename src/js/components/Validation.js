// validation.js


// Função para validar os campos e redirecionar para a página de extrato
export function validarCampos() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;


    if (agencia && numero) {
        window.location.href = "../pages/extrato.html";
        return true;
    } else {
        alert("Preencha todos os campos para acessar o extrato.");
        return false;
    }

}

