// Select the form and the task list
const form = document.querySelector('form');
const taskList = document.querySelector('ul');

// Function to handle form submission
function addTask(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input field value and create a new task list item
  const newTask = document.querySelector('#newTask').value;
  const newTaskItem = document.createElement('li');
  newTaskItem.innerText = newTask;

  // Add the new task to the task list
  taskList.appendChild(newTaskItem);

  // Clear the input field
  document.querySelector('#newTask').value = '';
}

// Add an event listener to the form
form.addEventListener('submit', addTask);
