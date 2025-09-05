
const titulo = document.getElementById('taskTitle');
const descricao = document.getElementById('taskDescription');
const listaPendentes = document.getElementById('pendentesLista');
const listaConcluidas = document.getElementById('concluidasLista');

let tasks = []; // A ÚNICA "FONTE DA VERDADE"

export class Tarefa {
    constructor(titulo, descricao) {
        this.id = Date.now();
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = "pendente";
    }
}

export function addTask(event) {
    event.preventDefault();
    const task = new Tarefa(titulo.value.trim(), descricao.value.trim());

    if (task.titulo === '') {
        alert("Adicione um Título!");
        return;
    }
    
    tasks.push(task);
    salvarTask();
    renderizarTask();

    titulo.value = '';
    descricao.value = '';
}

export function concluirTask(idDaTarefa) {

    const task = tasks.find(t => t.id === idDaTarefa);

    if (task) {
        task.status = "concluido";
        
        salvarTask();
        renderizarTask();
    }
}

function renderizarTask() {
    if (listaPendentes) listaPendentes.innerHTML = '';
    if (listaConcluidas) listaConcluidas.innerHTML = '';

    tasks.forEach(tarefa => {
        if (tarefa.status === 'pendente' && listaPendentes) {
            criarTask(tarefa, listaPendentes);
} else if (tarefa.status === 'concluido' && listaConcluidas) {
            criarTask(tarefa, listaConcluidas);
        }
    });
}


function criarTask(task, lista) { 
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-start';
    listItem.setAttribute('data-task-id', task.id);

    if(task.status == 'pendente') {
        listItem.innerHTML = `
            <div class="ms-2 me-auto">
                <div class="fw-bold">${task.titulo}</div>
                <p class="mb-1">${task.descricao}</p>
            </div>
            <div class="task-buttons">
                <button class="btn btn-success btn-sm btn-concluir">Concluir</button>
                <button class="btn btn-warning btn-sm btn-editar">Editar</button>
                <button class="btn btn-danger btn-sm btn-remover">Remover</button>
            </div>
        `
    }
    else {
        listItem.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold">${task.titulo}</div>
            <p class="mb-1">${task.descricao}</p>
        </div>
        <div class="task-buttons">
            <button class="btn btn-danger btn-sm btn-remover">Remover</button>
        </div>
    `
    }

    lista.appendChild(listItem);
}

function salvarTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function carregarTasks() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tasks'));
    
    if (tarefasSalvas && tarefasSalvas.length > 0) {
        tasks = tarefasSalvas.map(tarefaSimples => {
            const tarefaCompleta = new Tarefa(tarefaSimples.titulo, tarefaSimples.descricao);
            tarefaCompleta.id = tarefaSimples.id;
            tarefaCompleta.status = tarefaSimples.status;
            return tarefaCompleta;
        });
    }
    renderizarTask();
}