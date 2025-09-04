
import { addTask, carregarTasks, concluirTask } from "./salvarTarefa.js";

const form = document.getElementById('taskForm');
const listaPendentes = document.getElementById('pendentesLista');

if (form) {
    form.addEventListener('submit', addTask);
}

if (listaPendentes) {
    listaPendentes.addEventListener('click', event => {
        if (event.target.classList.contains('btn-concluir')) {
            const liPai = event.target.closest('li');
            const idDaTarefa = parseInt(liPai.dataset.taskId);
            
            concluirTask(idDaTarefa);
        }
    });
}

carregarTasks();