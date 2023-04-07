// Select elements
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// Add task
function addTask() {
  // Get the task input value
  const taskText = taskInput.value.trim();

  // If the input is not empty
  if (taskText !== '') {
    // Create new task element
    const newTask = document.createElement('li');
    newTask.innerHTML = `<span class="task-text">${taskText}</span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
      <form class="edit-form">
        <input type="text" value="${taskText}">
        <button type="submit">Save</button>
      </form>`;
    
    // Add task to the list
    taskList.appendChild(newTask);

    // Clear the input
    taskInput.value = '';

    // Add event listeners to edit and delete buttons
    const deleteBtn = newTask.querySelector('.delete');
    const editBtn = newTask.querySelector('.edit');
    const editForm = newTask.querySelector('.edit-form');
    const editText = newTask.querySelector('.edit-form input[type="text"]');
    const taskTextEl = newTask.querySelector('.task-text');

    deleteBtn.addEventListener('click', () => {
      newTask.remove();
    });

    editBtn.addEventListener('click', () => {
      editForm.style.display = 'block';
      taskTextEl.style.display = 'none';
    });

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTaskText = editText.value.trim();
      if (newTaskText !== '') {
        taskTextEl.textContent = newTaskText;
        editForm.style.display = 'none';
        taskTextEl.style.display = 'inline';
      }
    });

    taskTextEl.addEventListener('click', () => {
      taskTextEl.classList.toggle('completed');
    });
  }
}

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on enter key press
taskInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addTask();
  }
});