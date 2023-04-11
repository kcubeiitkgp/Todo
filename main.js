const form = document.querySelector('form');
const taskList = document.querySelector('#taskList');
const clearBtn = document.querySelector('#clearBtn');

// Load tasks from local storage
if (localStorage.getItem('tasks')) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (const task of tasks) {
    const taskItem = createTaskElement(task);
    taskList.appendChild(taskItem);
  }
}

// Add a new task
function addTask(event) {
  event.preventDefault();
  const newTask = document.querySelector('#newTask').value.trim();
  if (newTask !== '') {
    const taskItem = createTaskElement(newTask);
    taskList.appendChild(taskItem);
    saveTasks();
    document.querySelector('#newTask').value = '';
  }
}

// Create a task element
function createTaskElement(task) {
  const taskItem = document.createElement('li');
  taskItem.innerText = task;
  taskItem.addEventListener('click', toggleCompleted);
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'X';
  deleteBtn.addEventListener('click', deleteTask);
  taskItem.appendChild(deleteBtn);
  return taskItem;
}

// Toggle completed status
function toggleCompleted() {
  this.classList.toggle('completed');
  saveTasks();
}

// Delete task
function deleteTask() {
  this.parentNode.remove();
  saveTasks();
}

// Clear completed tasks
function clearCompletedTasks() {
  const completedTasks = taskList.querySelectorAll('.completed');
  for (const taskItem of completedTasks) {
    taskItem.remove();
  }
  saveTasks();
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];
  for (const taskItem of taskList.querySelectorAll('li')) {
    tasks.push(taskItem.innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listeners
form.addEventListener('submit', addTask);
clearBtn.addEventListener('click', clearCompletedTasks);

