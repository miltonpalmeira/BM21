selectAll();

document.querySelector('#salvar').addEventListener('click', () => {
    let user = { };

    let fields = document.querySelectorAll('#form-user-create [name]');

    let isValid = true;

    fields.forEach((field, index) => {
        if (field.name == 'name') {
            if (field.value == '') {
                isValid = false;
                field.parentElement.classList.add('has-error');
            }
            else {
                field.parentElement.classList.remove('has-error');
            }
        }
        if (field.name == 'email') {
            if (field.value == '') {
                isValid = false;
                field.parentElement.classList.add('has-error');
            }
            else {
                field.parentElement.classList.remove('has-error');
            }
        }
        if (field.name == 'password') {
            if (field.value == '') {
                isValid = false;
                field.parentElement.classList.add('has-error');
            }
            else {
                field.parentElement.classList.remove('has-error');
            }
        }

        if (isValid) {
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
        }
    });

    if (isValid) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="dist/img/user1-128x128.jpg" alt="Imagem do usuário" class="img-sm img-circle"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.admin}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>
                <button type="button" class="btn btn-primary btn-sm">Editar</button>
                <button type="button" class="btn btn-danger btn-sm btn-delete" data-toggle="modal" data-target="#modalExcluir">Excluir</button>
            </td>
        `;
        // Adiciona dentro da tabela a linha com as colunas
        document.querySelector('#table-users').appendChild(tr);

        // Limpar os campos
        document.querySelector('#form-user-create').reset();
        
        updateCount();
        addEventsTr(tr);
        insert(JSON.stringify(user));
    }
});

// Função para contabilizar todos os usuários e administradores
function updateCount() {
    let numberUsers = 0;
    let numberAdmin = 0;

    [...document.querySelector('#table-users').children].forEach((tr => {
        numberUsers++;
        if (tr.children[3].innerHTML == 'Sim') {
            numberAdmin++;
        }
    }));

    document.querySelector('#number-users').innerHTML = numberUsers;
    document.querySelector('#number-users-admin').innerHTML = numberAdmin;
}

// Função para adicionar as funções dos botões exlcuir e alterar
function addEventsTr(tr) {
    tr.querySelector('.btn-delete').addEventListener('click', () => {
        // Adicionar um MODAL do Boostrap ao invés do CONFIRM
        document.querySelector('#confirmar-exclusao').addEventListener('click', () => {
            tr.remove();
            updateCount();
            $('#modalExcluir').modal('hide');
        });
    });
}

// Função para adicionar os dados no SESSIONSTORAGE
function insert(dataUser) {
    let users = [];

    // Se xistir algum valor no SessionStorage
    // adicionar esse valor no array como JSON
    if (sessionStorage.getItem('users')) {
        users = JSON.parse(sessionStorage.getItem('users'));
    }

    users.push(dataUser);

    sessionStorage.setItem('users', JSON.stringify(users));
}

function selectAll() {
    let users = [];

    if (sessionStorage.getItem('users')) {
        users = JSON.parse(sessionStorage.getItem('users'));
    }

    // Passar usuário por usuário e adicionar uma nova linha na tabela
    users.forEach(user => {
        console.log(user);
        // Inserir os dados retornados na tabela
    });
}

/*let nome = document.querySelector('#exampleInputName').value;
let genero = document.querySelector('input[name=gender]:checked').value;
let dtNascimento = document.querySelector('#exampleInputBirth').value;
let pais = document.querySelector('#exampleInputCountry').value;
let email = document.querySelector('#exampleInputEmail1').value;
let senha = document.querySelector('#exampleInputPassword1').value;
let foto = document.querySelector('#exampleInputFile').value;
let admin = document.querySelector('#exampleInputAdmin').value;
let cpf = document.querySelector('#cpf).value;*/