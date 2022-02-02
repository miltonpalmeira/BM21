document.querySelector('#btn-calcular').addEventListener('click', () => {
    let notas = [];
    notas[0] = parseInt(document.querySelector('#txt-nota1').value);
    notas[1] = parseInt(document.querySelector('#txt-nota2').value);
    notas[2] = parseInt(document.querySelector('#txt-nota3').value);
    notas[3] = parseInt(document.querySelector('#txt-nota4').value);

    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

    for (let i = 0; i < 10; i++)
    {
       notas[i] = Math.random();
    }

    notas.forEach( (element, index) => {
        let td = document.createElement('td');
        td.innerHTML = `Nota${index + 1}: ${element}`;
        document.querySelector('#linha-notas').appendChild(td);
    });

    document.querySelector('#resultado').innerHTML = 'Média: ' + media;
});