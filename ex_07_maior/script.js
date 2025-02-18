document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    let mensagem;
    if (numero1 > numero2) {
        mensagem = `O primeiro número (${numero1}) é maior que o segundo número (${numero2})`;
    } else if (numero2 > numero1) {
        mensagem = `O segundo número (${numero2}) é maior que o primeiro número (${numero1})`;
    } else {
        mensagem = `Os números são iguais`;
    }

    document.getElementById('resultadoComparacao').textContent = mensagem;
});