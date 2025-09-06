
import { addTask, carregarTasks, concluirTask, removerTask, editarTask, atualizarTask } from "./salvarTarefa.js";

const form = document.getElementById('taskForm')
const listaPendentes = document.getElementById('pendentesLista')
const listaConcluidas = document.getElementById('concluidasLista')

const taskModalEl = document.getElementById('editTaskModal')
const btnSalvar = document.getElementById('editarTask')

let idEmEdicao = null

btnSalvar.addEventListener('click', (event) => {
    event.preventDefault();

    if (idEmEdicao) {
        const novoTitulo = document.getElementById('editTaskTitle').value;
        const novaDescricao = document.getElementById('editTaskDescription').value;

        atualizarTask(idEmEdicao, novoTitulo, novaDescricao);

        const modalInstance = bootstrap.Modal.getInstance(taskModalEl)
        modalInstance.hide()
        idEmEdicao = null
    }
})

if (form) {
    form.addEventListener('submit', addTask)
}

if (listaPendentes) {
    listaPendentes.addEventListener('click', event => {
        if (event.target.classList.contains('btn-concluir')) {
            const liPai = event.target.closest('li')
            const idDaTarefa = parseInt(liPai.dataset.taskId)
            
            concluirTask(idDaTarefa)
        }
        else if(event.target.classList.contains('btn-remover')) {
            const liPai = event.target.closest('li')
            const idDaTarefa = parseInt(liPai.dataset.taskId)

            removerTask(idDaTarefa)
        }
        else if(event.target.classList.contains('btn-editar')) {
            const liPai = event.target.closest('li')
            const idDaTarefa = parseInt(liPai.dataset.taskId)

            idEmEdicao = idDaTarefa

            editarTask(idDaTarefa)
        }
    });
}

if (listaConcluidas) {
    listaConcluidas.addEventListener('click', event => {
        if (event.target.classList.contains('btn-remover')) {
            const liPai = event.target.closest('li');
            const idDaTarefa = parseInt(liPai.dataset.taskId);

            removerTask(idDaTarefa);
        }
    });
}

carregarTasks()