document.querySelector('#salvar').addEventListener('click', () => {
    let user = {}
    let campos = document.querySelectorAll('#form-user-create [name]')
    let isValid = true
    campos.forEach((campo, index) => {
        if (campo.name == 'name') {
            if (campo.value == '') {
                isValid = false
                campo.parentElement.classList.add('has-error')
            }
            else {
                campo.parentElement.classList.remove('has-error')
            }
        }
        if (campo.name == 'email') {
            if (campo.value == '') {
                isValid = false
                campo.parentElement.classList.add('has-error')
            }
            else {
                campo.parentElement.classList.remove('has-error')
            }
        }
        if (campo.name == 'password') {
            if (campo.value == '') {
                isValid = false
                campo.parentElement.classList.add('has-error')
            }
            else {
                campo.parentElement.classList.remove('has-error')
            }
        }
        if (isValid) {
            if (campo.name == 'admin') {
                if (campo.checked) {
                    user[campo.name] = 'Sim';
                }
                else {
                    user[campo.name] = 'Não';
                }
            }
            else if (campo.name == 'gender') {
                if (campo.checked) {
                    user[campo.name] = campo.value
                }
            }
            else {

                user[campo.name] = campo.value
            }
        }
    })

    if (isValid) {
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>  <img src = "dist/img/avatar5.png" alt = " Imagem do usuário" class = "img-sm img-circle" </td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.admin}</td>
            <td>${new Date().toLocaleDateString()}</td>
            <td>  
                <button type = "button" class= "btn btn-primary btn-sm " >Editar</button>
                <button type = "button" class= "btn btn-danger btn-sm btn-delete" data-toggle="modal" data-target="#modalExcluir">Excluir</button>
            </td>
        `
        // adicionando na tabela a linha com colunas
        document.querySelector('#table-users').appendChild(tr)
        //limpar os campos
        document.querySelector('#form-user-create').reset()
        updateCount();
        addEventsTr(tr);
    }
})
//função para contabilizar os usuarios e admin
function updateCount() {
    numberUsers = 0;
    numberAdmin = 0;
    [...document.querySelector('#table-users').children].forEach((tr => {
        numberUsers++;
        if (tr.children[3].innerHTML === 'Sim') {
            numberAdmin++;
        }
    }))
    document.querySelector('#number-users').innerHTML = numberUsers;
    document.querySelector('#number-users-admin').innerHTML = numberAdmin;
}
//função para adicionar as funções dos botões excluir e alterar
function addEventsTr(tr) {

    tr.querySelector('.btn-delete').addEventListener('click', () => {
        document.querySelector('#confirmar-exclusao').addEventListener('click', () => {
            tr.remove();
            updateCount();
        })
    })
}