document.querySelector('#salvar').addEventListener('click', () => {
    let user = { };

    let fields = document.querySelectorAll('#form-user-create [name]');

    fields.forEach((field, index) => {
        if ()
        if (field.name == 'gender') {
            if (field.checked) {
                user[field.name] = field.value;
            }
        }
        else {
            user[field.name] = field.value;
        }
        // Se for Admin - Sim - Não
    });

    // user[name] = 'Milton'
    // user[gender] = 'M'
    // user[birth] = '01/01/2000'

    console.log(user);
});

/*let nome = document.querySelector('#exampleInputName').value;
let genero = document.querySelector('input[name=gender]:checked').value;
let dtNascimento = document.querySelector('#exampleInputBirth').value;
let pais = document.querySelector('#exampleInputCountry').value;
let email = document.querySelector('#exampleInputEmail1').value;
let senha = document.querySelector('#exampleInputPassword1').value;
let foto = document.querySelector('#exampleInputFile').value;
let admin = document.querySelector('#exampleInputAdmin').value;*/