function calc(num1, num2, operador) {
    let resultado = 0;
    if (operador == "+") {
        resultado = parseFloat(num1) + parseFloat(num2);
    }
    else if (operador == "-") {
        resultado = num1 - num2;
    }
    else if (operador == "*") {
        resultado = num1 * num2;
    }
    else {
        resultado = num1 / num2;
    }
    return resultado;
}

document.querySelector('#calcular').addEventListener('click', e => {
    let num1 = document.querySelector('#valor1').value;
    let num2 = document.querySelector('#valor2').value;
    let operador = document.querySelector('#operador').value;

    let resultado = calc(num1, num2, operador);

    alert('Resultado: ' + resultado);
});