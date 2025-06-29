const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefas = document.querySelector('.tarefas');


btnTarefa.addEventListener('click', (e) => {
    if(!inputTarefa.value) return;
    console.log(inputTarefa.value);
    criarLi(inputTarefa.value);
    inputTarefa.value = '';
});

inputTarefa.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        console.log(inputTarefa.value);
        criarLi(inputTarefa.value);
        inputTarefa.value = '';
    }
});

function criarLi(tarefa) {
    listaTarefas.innerHTML += `
        <li>
            ${tarefa} <button type="button">Apagar</button>
        </li>
    `;
}