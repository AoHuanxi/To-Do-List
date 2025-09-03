

const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {

    const task = taskInput.value.trim();

    if (task) {

        createTaskElement(task);
        taskInput.value = '';

    }
    else {
        alert('Please enter a task')
    }

}

addButton.addEventListener('click', addTask);

function createTaskElement(task) {

}