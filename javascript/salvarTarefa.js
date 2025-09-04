const titulo = document.getElementById('taskTitle')
const descricao = document.getElementById('taskDescription')
const lista = document.getElementById('pendentesLista')

let tasks = []

class Tarefa {
    constructor(titulo, descricao) {
        this.id = Date.now()
        this.titulo = titulo
        this.descricao = descricao
        this.status = "pendente"
    }
}

function addTask(event) {

    event.preventDefault()

    const task = new Tarefa(titulo.value.trim(), descricao.value.trim())

    if(task.titulo.trim() === '') {
        alert("Adicione um Título!")
        return
    }
    else {
        tasks.push(task)
        salvarTask()
        renderizarTask()

        titulo.value = ''
        descricao.value = ''
    }

}

function renderizarTask() {
    lista.innerHTML = ''

    tasks.forEach(tarefa => {
        criarTask(tarefa)
    })
}

function criarTask(task) {
    const listItem = document.createElement('li')
    listItem.className = 'list-group-item d-flex justify-content-between align-items-start'
    listItem.setAttribute('data-task-id', task.id)

    listItem.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold">${task.titulo}</div>
            <p class="mb-1">${task.descricao}</p>
        </div>
        <div class="task-buttons">
            <button class="btn btn-success btn-sm">Concluir</button>
            <button class="btn btn-warning btn-sm">Editar</button>
            <button class="btn btn-danger btn-sm">Remover</button>
        </div>
    `

    lista.appendChild(listItem)

}

function salvarTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function carregarTasks() {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tasks'));
    
    if (tarefasSalvas && tarefasSalvas.length > 0) {
        tasks = tarefasSalvas.map(tarefaSimples => {
            const tarefaCompleta = new Tarefa(tarefaSimples.titulo, tarefaSimples.descricao);
            tarefaCompleta.id = tarefaSimples.id;
            tarefaCompleta.status = tarefaSimples.status;
            return tarefaCompleta;
        });
    }

    renderizarTask()

}

export { addTask, carregarTasks as loadTasks }