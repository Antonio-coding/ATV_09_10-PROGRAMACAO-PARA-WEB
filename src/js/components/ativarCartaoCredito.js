export function configurarEventosCartaoCredito() {
    const tipoContaSelectElement = document.getElementById('tipo');
    const cartaoCreditoButton = document.getElementById('cartaoCreditoButton');
    const ativarCartaoCreditoButtonElement = document.getElementById('ativarCartaoCredito');

    if (tipoContaSelectElement && cartaoCreditoButton && ativarCartaoCreditoButtonElement) {
        tipoContaSelectElement.addEventListener("change", () => {
            ajustarVisibilidadeCartaoCredito(tipoContaSelectElement, cartaoCreditoButton);
        });

        ativarCartaoCreditoButtonElement.addEventListener("click", () => {
            toggleCartaoCredito(cartaoCreditoButton, ativarCartaoCreditoButtonElement);
        });
    }
}

function ajustarVisibilidadeCartaoCredito(tipoContaSelectElement, cartaoCreditoButton) {
    const selectedValue = tipoContaSelectElement.value;
    if (selectedValue === "corrente") {
        cartaoCreditoButton.style.display = "block";
    } else {
        cartaoCreditoButton.style.display = "none";
    }
}

function toggleCartaoCredito(cartaoCreditoButton, ativarCartaoCreditoButtonElement) {
    const isCartaoAtivado = cartaoCreditoButton.getAttribute("data-ativado") === "true";
    const saldoAtual = parseFloat(localStorage.getItem('saldo'));

    if (isCartaoAtivado) {
        // Desativar o cartão e subtrair R$ 1000 do saldo
        cartaoCreditoButton.setAttribute("data-ativado", "false");
        ativarCartaoCreditoButtonElement.textContent = "Ativar Cartão de Crédito";
        localStorage.setItem('saldo', saldoAtual - 1000);
    } else {
        // Ativar o cartão e adicionar R$ 1000 ao saldo
        cartaoCreditoButton.setAttribute("data-ativado", "true");
        ativarCartaoCreditoButtonElement.textContent = "Desativar Cartão de Crédito";
        localStorage.setItem('saldo', saldoAtual + 1000);
    }
}
