// Import the ContaBancaria class

import  ContaBancaria  from '../components/ContaBancaria';

// Create an instance of ContaBancaria
const conta = new ContaBancaria('agencia', 'numero', 'tipo', saldoInicial);

// Function to update the transaction history on the screen
export function updateTransactionHistory() {
    const transactionHistory = document.getElementById('extrato');
    transactionHistory.innerHTML = ''; // Clear previous content

    // Iterate over the transactions in the account and add them to the history
    for (const transaction of conta.transacoes) {
        const transactionElement = document.createElement('li');
        transactionElement.textContent = `${transaction.data} - ${transaction.tipo}: R$${transaction.valor.toFixed(2)}`;
        transactionHistory.appendChild(transactionElement);
    }
}

// Event listener for the "Depositar" button
export function handleDeposit() {
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        // Perform the deposit
        conta.depositar(valor);

        // Update the transaction history on the screen
        updateTransactionHistory();

        // Clear the value input field
        valorInput.value = '';
    } else {
        alert('Please enter a valid amount.');
    }
}

// Event listener for the "Sacar" button
export function handleWithdrawal() {
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        // Perform the withdrawal
        const success = conta.sacar(valor);

        if (success) {
            // Update the transaction history on the screen
            updateTransactionHistory();

            // Clear the value input field
            valorInput.value = '';
        } else {
            alert('Insufficient balance or invalid amount.');
        }
    } else {
        alert('Please enter a valid amount.');
    }
}

// Event listener for the "Extrato" button
export function handleExtrato() {
    // Update the transaction history on the screen
    updateTransactionHistory();
}
