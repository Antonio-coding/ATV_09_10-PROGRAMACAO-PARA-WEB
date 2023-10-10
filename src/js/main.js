import { includeHeader } from './fetch/header.js';
import { includeFooter } from './fetch/footer.js';
import { toggleInstructions } from './components/expand.js';
import { validarCampos } from './components/Validation.js';

includeFooter();
includeHeader();

document.addEventListener("DOMContentLoaded", () => {

    const el = document.getElementById("entrar");
    if (el) {
        el.addEventListener('click', function () {
            if (validarCampos()) {
                window.location.href = "../pages/extrato.html";
            }
        });
    }
    
    const extratoLink = document.getElementById("extrato");
    if (extratoLink) {
        extratoLink.addEventListener('click', function (event) {
            event.preventDefault();
            alert("Você precisa fazer login para acessar o extrato.");
        });
    }

    
    const al = document.getElementById("toggleButton");
    if (al) {
        al.addEventListener('click', toggleInstructions);
    }

    
});
