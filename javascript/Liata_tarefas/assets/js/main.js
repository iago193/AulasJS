const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');


btnTarefa.addEventListener('click', (e) => {
    if(!inputTarefa.value) return;
    console.log(inputTarefa.value);
    criarLi(inputTarefa.value);
    limparInput();
});

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        console.log(inputTarefa.value);
        criarLi(inputTarefa.value);
        limparInput();
    }
});

function criarLi(tarefa) {
    listaTarefas.innerHTML += `
        <li>
            ${tarefa} <button class="apagar" type="button">Apagar</button>
        </li>
    `;
    salvarTarefas()
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.classList.contains('apagar')) {
        //console.log(el.parentElement);
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const tarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        tarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(tarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    
}

function carregarTarefas() {
    const tarefas = localStorage.getItem('tarefas');
    const lista = JSON.parse(tarefas);

    for(let tarefa of lista) {
        criarLi(tarefa);
    }
}

carregarTarefas()