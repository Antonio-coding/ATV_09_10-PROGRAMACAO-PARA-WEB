// Função para alternar a visibilidade das instruções
export function toggleInstructions() {
    var instructions = document.getElementById('instructions');
    var toggleButton = document.getElementById('toggleButton');

    if (instructions.style.display === 'none' || instructions.style.display === '') {
        instructions.style.display = 'block';
        toggleButton.innerText = 'Recolher ▲';
    } else {
        instructions.style.display = 'none';
        toggleButton.innerText = 'Expandir ▼';
    }
}
