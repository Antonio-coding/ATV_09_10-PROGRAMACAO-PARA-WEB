export function includeHeader() {
  fetch('../../routes/header.html')
    .then(response => {
      if (!response.ok) {
        throw new Error("Arquivo não encontrado");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header-container').innerHTML = data;
    })
    .catch(error => {
      console.error("Erro ao carregar o cabeçalho:", error);
      document.getElementById('header-container').textContent = "Erro ao carregar o cabeçalho.";
    });
}


