// Importe os módulos necessários
import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js'; // Corrija o caminho para 'components'

// Inclua o módulo da ContaBancaria
import { ContaBancaria } from './class/ContaBancaria.js';

includeFooter();
includeHeader();

// Atualize o evento de clique no botão de instruções
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleInstructions();
});

// Crie uma instância da ContaBancaria com um saldo inicial de 1000
const conta = new ContaBancaria(1000);

document.getElementById("inserir").addEventListener("click", function () {
    const valorInput = document.getElementById("valor");
    const valor = parseFloat(valorInput.value);
    valorInput.value = ""; // Limpar o campo de valor após adicionar

    conta.depositar(valor);
});

document.getElementById("deletar").addEventListener("click", function () {
    const valorInput = document.getElementById("valor");
    const valor = parseFloat(valorInput.value);
    valorInput.value = ""; // Limpar o campo de valor após adicionar

    conta.sacar(valor);
});

document.getElementById("ver-saldo").addEventListener("click", function () {
    conta.realizarAcao("3");
});
