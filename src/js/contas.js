import ContaBancaria from '/ContaBancaria';
// Add an event listener to the "Inserir" button
document.getElementById("inserir").addEventListener("click", function () {
    // Get the values from the form fields
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    // Create an instance of ContaBancaria with the provided information
     const conta = new ContaBancaria(agencia, numero, tipo, saldo);

    // You can now work with the 'conta' object as needed
    console.log("Nova conta criada:", conta);

    // Optionally, you can reset the form fields
    document.getElementById("agencia").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("saldo").value = "";
});

