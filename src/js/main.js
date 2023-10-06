import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js'; // Correct the path to 'components'
import * as custom from './fetch/custom.js'; // Import all functions from custom.js

includeFooter();
includeHeader();

// Update the event listeners using the functions from custom.js
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleInstructions();
});

document.getElementById('depositar').addEventListener('click', custom.handleDeposit);
document.getElementById('sacar').addEventListener('click', custom.handleWithdrawal);
document.getElementById('extrato').addEventListener('click', custom.handleExtrato);
