document.querySelector('#salvar').addEventListener('click', () => {
    let user = { };

    let fields = document.querySelectorAll('#form-user-create [name]');

    fields.forEach((field, index) => {
        if (field.name == 'admin') {
            if (field.checked) {
                user[field.name] = 'Sim';
            }
            else {
                user[field.name] = 'Não';
            }
        }
        else if (field.name == 'gender') {
            if (field.checked) {
                user[field.name] = field.value;
            }
        }
        else {
            user[field.name] = field.value;
        }
    });

    let tr = document.createElement('tr');
    tr.innerHTML = `
        <td>Foto</td>
        <td>Nome</td>
        <td>Email</td>
        <td>Admin</td>
        <td>Criado em</td>
        <td>Ações</td>
    `;
    // Adiciona dentro da tabela a linha com as colunas
    document.querySelector('#table-users').appendChild(tr);
});

/*let nome = document.querySelector('#exampleInputName').value;
let genero = document.querySelector('input[name=gender]:checked').value;
let dtNascimento = document.querySelector('#exampleInputBirth').value;
let pais = document.querySelector('#exampleInputCountry').value;
let email = document.querySelector('#exampleInputEmail1').value;
let senha = document.querySelector('#exampleInputPassword1').value;
let foto = document.querySelector('#exampleInputFile').value;
let admin = document.querySelector('#exampleInputAdmin').value;
let cpf = document.querySelector('#cpf).value;*/