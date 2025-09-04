
import { addTask, loadTasks } from "./salvarTarefa.js";

const form = document.getElementById('taskForm');

if (form) {
    form.addEventListener('submit', addTask);
}

loadTasks();
