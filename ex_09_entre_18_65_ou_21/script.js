document.getElementById('calcularBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const idade = parseFloat(document.getElementById('idade').value);

    let mensagem;
    if (idade >= 18 && idade < 21) {
        mensagem = `Maior de idade, mas menor de 21`;
    } else if (idade >= 21 && idade <= 65) {
        mensagem = `Maior de 21 e não é idoso`;
    } else if (idade < 18) {
        mensagem = `Menor de idade`;
    } 
    else {
        mensagem = `Idoso`;
    }

    document.getElementById('resultadoIdade').textContent = mensagem;
});