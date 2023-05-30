// Todo list functionality
const todoItemsContainer = document.getElementById('todo-items-container');
const addTodoInput = document.getElementById('add-todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');

addTodoBtn.addEventListener('click', addTodoItem);
addTodoInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});

function addTodoItem() {
    const todoText = addTodoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.setAttribute('draggable', 'true'); // Enable draggable attribute

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.innerText = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');

        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteBtn);
        todoItemsContainer.appendChild(todoItem);

        addTodoInput.value = '';

        // Clear chatbox message on drag and drop
        todoItem.addEventListener('dragstart', function (event) {
            const todoText = event.target.querySelector('label');
            if (todoText) {
                userInput.value = todoText.innerText;
                userInput.focus();
            }
        });

        // Delete todo item
        deleteBtn.addEventListener('click', function () {
            todoItem.remove();
        })
        
    }
}