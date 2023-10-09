// Suponha que você já tenha importado a classe ContaBancaria
import ContaBancaria from './components/ContaBancaria';

// Event listener para o botão "Inserir"
document.getElementById("inserir").addEventListener("click", function () {
    // Obter os valores dos campos do formulário
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    // Criar uma instância de ContaBancaria com as informações fornecidas
    const conta = new ContaBancaria(agencia, numero, tipo, saldo);

    // Agora você pode trabalhar com o objeto 'conta' conforme necessário
    console.log("Nova conta criada:", conta);

    // Opcionalmente, você pode redefinir os campos do formulário
    document.getElementById("agencia").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("saldo").value = "";
});
