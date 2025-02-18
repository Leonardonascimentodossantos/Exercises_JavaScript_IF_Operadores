document.getElementById('calcularBtn').addEventListener('click', function(event){
    event.preventDefault();

    const hora = parseFloat(document.getElementById('horario').value)

    const resultado = hora < 12 || hora > 18;

    document.getElementById('resultado').textContent = `${resultado}`;
});