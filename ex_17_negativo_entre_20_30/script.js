document.getElementById('calcularBtn').addEventListener('click', function(event){
    event.preventDefault();

    const numero = parseFloat(document.getElementById('numero').value);

    const resultado = (numero >= 20 && numero <=30) || numero < 0;

    document.getElementById('resultado').textContent = `${resultado}`;
});