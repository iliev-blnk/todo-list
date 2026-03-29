const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
        
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.text;
        textSpan.addEventListener('click', function() {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });
        
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });
        
        actionsDiv.appendChild(deleteBtn);
        taskItem.appendChild(textSpan);
        taskItem.appendChild(actionsDiv);
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();
    
    taskInput.value = '';
    taskInput.focus();
}

renderTasks();
