// Select the form and the task list
const form = document.querySelector('form');
const taskList = document.querySelector('ul');

// Add tasks from local storage
if (localStorage.getItem('tasks')) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (const task of tasks) {
    const taskItem = document.createElement('li');
    taskItem.innerText = task;
    taskList.appendChild(taskItem);
  }
}

// Function to handle form submission
function addTask(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input field value and create a new task list item
  const newTask = document.querySelector('#newTask').value.trim();
  if (newTask !== '') {
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTask;

    // Add the new task to the task list
    taskList.appendChild(newTaskItem);

    // Save tasks to local storage
    const tasks = [];
    for (const taskItem of taskList.querySelectorAll('li')) {
      tasks.push(taskItem.innerText);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear the input field
    document.querySelector('#newTask').value = '';
  }
}

// Add an event listener to the form
form.addEventListener('submit', addTask);

// Add event listeners to task list items to mark them as completed
taskList.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
    // Save tasks to local storage
    const tasks = [];
    for (const taskItem of taskList.querySelectorAll('li')) {
      tasks.push(taskItem.innerText);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

// Function to clear all completed tasks
function clearCompletedTasks() {
  const completedTasks = taskList.querySelectorAll('.completed');
  for (const taskItem of completedTasks) {
    taskItem.remove();
  }
  // Save tasks to local storage
  const tasks = [];
  for (const taskItem of taskList.querySelectorAll('li')) {
    tasks.push(taskItem.innerText);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
