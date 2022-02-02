document.querySelector('#btn-calcular').addEventListener('click', () => {
    let numero = document.querySelector('#txt-tabuada').value;
    /*for (let i = 1; i <= 10; i++) {
        console.log(numero * i);
    }*/
    /*let i = 11;
    while (i <= 10) {
        console.log(numero * i);
        i++;
    }*/
    let i = 11;
    do {
        console.log(numero * i);
        i++;
    } while(i <= 10);
});