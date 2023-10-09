// main.js

import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';
import './components/Validation.js'; // Importe o arquivo de validação

includeFooter();
includeHeader();

// Atualize o evento de clique no botão de instruções
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleInstructions();
});

// Não é necessário mais importar as funções customizadas para depositar, sacar e extrato
// Você pode adicionar essas importações se precisar dessas funcionalidades posteriormente
