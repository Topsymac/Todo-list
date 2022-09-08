let todos = [{
        id: 1, // Number
        task: 'I will wake up at 8 in the morning', // String
        completed: false, // Boolean
    },
    {
        id: 2, // Number
        task: 'I will practice HTMl for 1 hour', // String
        completed: false, // Boolean
    },
    {
        id: 3, // Number
        task: 'I will give time for 2 hours CSS', // String
        completed: false, // Boolean
    },
    {
        id: 4, // Number
        task: 'Then I will have breakfast', // String
        completed: false, // Boolean
    },
];
const todoItems = document.querySelector('.todo-items');

// Gets called as soon as the page is loaded
function renderTodos() {
    todos.forEach((todo, index) => {
        // TODO: Render todos inside of their parent div - Todo Items
        const todoElement = `<div class="todo-item">
                                <p class="${todo.completed ? 'strike=through' : '' }">${todo.task}</p>
                                 <button onclick="deleteTodo(${todo.id})"><i class="fa fa-trash"></i></button>
                                    </div>`;

        todoItems.innerHTML += `${todoElement}`;
    });

}

// Gets called when the Add button is clicked
function addTodo() {
    // Target the input element and get its value - event listeners
    const todoFromInput = 'Get my hair fixed';
    const todoItem = {
        id: todos.length + 1,
        task: todoFromInput,
        completed: false,
    };
    // Call function on add button click
    todos.push(todoItem);
}

// Gets called when the delete button is pressed
function deleteTodo(id) {
    // Filter the todos array with a specific todo by the todo id
    // Remove items that matches the id
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    todos = updatedTodos;
}

// Gets called when a todo item is clicked
function toggleCompleted(id) {
    // Find the index of the clicked todo item
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    // Switch between true/false completed state
    todos[index].completed = !todos[index].completed;
    console.log(todos);
}

renderTodos();