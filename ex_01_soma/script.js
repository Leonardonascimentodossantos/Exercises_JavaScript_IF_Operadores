document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    const resultado = numero1 + numero2;
    document.getElementById('resultadoSoma').textContent = `${resultado}`;
});