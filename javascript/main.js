
import { addTask, carregarTasks, concluirTask, removerTask } from "./salvarTarefa.js";

const form = document.getElementById('taskForm')
const listaPendentes = document.getElementById('pendentesLista')
const listaConcluidas = document.getElementById('concluidasLista')
/*
const saveChangesBtn = document.getElementById('saveChangesBtn')
const editModalEl = document.getElementById('editTaskModal')

saveChangesBtn.addEventListener('click', () => {
    // 1. Pega o ID que guardamos no modal
    const idDaTarefa = parseInt(editModalEl.dataset.editingTaskId)
    const taskParaSalvar = tasks.find(t => t.id === idDaTarefa)

    if (taskParaSalvar) {
        // 2. Pega os novos valores dos inputs
        const novoTitulo = document.getElementById('editTaskTitle').value
        const novaDescricao = document.getElementById('editTaskDescription').value

        // 3. Atualiza o objeto da tarefa
        taskParaSalvar.titulo = novoTitulo
        taskParaSalvar.descricao = novaDescricao

        // 4. Salva no localStorage e renderiza novamente
        salvarTask();
        renderizarTask();

        // 5. Esconde o modal
        const bootstrapModal = bootstrap.Modal.getInstance(editModalEl)
        bootstrapModal.hide()
    }
}); */


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