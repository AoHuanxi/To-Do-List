
import { addTask, carregarTasks, concluirTask, removerTask } from "./salvarTarefa.js";

const form = document.getElementById('taskForm');
const listaPendentes = document.getElementById('pendentesLista');
const listaConcluidas = document.getElementById('concluidasLista')

if (form) {
    form.addEventListener('submit', addTask);
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

carregarTasks();