// Suponha que você já tenha importado a classe ContaBancaria
import ContaBancaria from './ContaBancaria';

// Event listener para o botão "Entrar"
document.getElementById("entrar").addEventListener("click", function () {
    // Obter os valores dos campos do formulário
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;

    // Definir um saldo inicial de 1000 BRL
    const saldo = 1500;

    // Armazenar os valores no localStorage
    localStorage.setItem('agencia', agencia);
    localStorage.setItem('numero', numero);
    // Armazenar o saldo no localStorage
    localStorage.setItem('saldo', saldo);

    // Criar uma instância de ContaBancaria com as informações fornecidas
    const conta = new ContaBancaria(agencia, numero, saldo);

    // O objeto 'conta' agora contém as informações da conta
    // Você pode fazer o que precisar com essa instância, como armazená-la localmente
    console.log("Nova conta criada:", conta);

    // Redirecione para a página de extrato
    window.location.href = "../pages/extrato.html";
});

// Recupera o saldo do localStorage
const saldo = parseFloat(localStorage.getItem('saldo'));

// Exibe o saldo na página de extrato
document.getElementById("saldoAtual").textContent = `Saldo Atual: R$ ${saldo.toFixed(2)}`;
