// 1. Access DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 2. Initialize array and fetch existing data from Local Storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 3. Render tasks dynamically to the DOM
function renderTodos() {
    // Clear the current list before re-rendering
    todoList.innerHTML = ''; 

    todos.forEach((todo, index) => {
        // Create list item (li)
        const li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between align-items-center todo-item ${todo.completed ? 'completed-task' : ''}`;
        
        // Create span for task text (clicking toggles completion)
        const span = document.createElement('span');
        span.textContent = todo.text;
        span.style.flexGrow = '1';
        span.onclick = () => toggleTodoComplete(index);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = (e) => {
            e.stopPropagation(); // Prevents the click from triggering toggleTodoComplete
            deleteTodo(index);
        };

        // Append elements to the DOM
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// 4. Function to add a new task
function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        todos.push({ text: taskText, completed: false });
        todoInput.value = ''; // Clear input field
        saveTodos();
        renderTodos();
    }
}

// 5. Function to delete a task using splice
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

// 6. Function to toggle task completion status
function toggleTodoComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

// 7. Function to save tasks to Local Storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 8. Event Listeners for user interactions
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// 9. Initial render on page load
renderTodos();