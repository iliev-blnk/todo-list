const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const textSpan = document.createElement('span');
    textSpan.className = 'task-text';
    textSpan.textContent = taskText;
    textSpan.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    });
    
    actionsDiv.appendChild(deleteBtn);
    taskItem.appendChild(textSpan);
    taskItem.appendChild(actionsDiv);
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
    taskInput.focus();
}
