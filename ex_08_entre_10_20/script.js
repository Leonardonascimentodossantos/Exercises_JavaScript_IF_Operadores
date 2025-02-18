document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);

    const resultado = numero >= 10 && numero <= 20;

    document.getElementById('resultadoIntervalo').textContent = `${resultado}`;
});