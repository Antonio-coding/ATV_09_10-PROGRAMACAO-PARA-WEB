export function includeFooter() {
    fetch('../../routes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Arquivo não encontrado");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error("Erro ao carregar o cabeçalho:", error);
            document.getElementById('footer-container').textContent = "Erro ao carregar o cabeçalho.";
        });
}
