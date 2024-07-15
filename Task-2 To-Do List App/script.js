

// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add task
function addTask() {
	const task = taskInput.value.trim();
	if (task) {
		const taskListItem = document.createElement('li');
		taskListItem.innerHTML = `
			<input type="checkbox" class="task-checkbox">
			<span>${task}</span>
		`;
		taskListItem.querySelector('.task-checkbox').addEventListener('click', toggleTaskCompletion);
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

// Function to toggle task completion
function toggleTaskCompletion(event) {
	const taskListItem = event.target.closest('li');
	taskListItem.classList.toggle('completed');
}




