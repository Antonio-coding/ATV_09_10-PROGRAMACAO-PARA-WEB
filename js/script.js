// método para pegar um elemento da DOM. Esse é bem parecido com o anterior, 
//com uma única diferença: ele retorna apenas o primeiro elemento que atende aos requisitos. 
//Ao encontrá-lo, esse método pára a sua execução

function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
      `${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
