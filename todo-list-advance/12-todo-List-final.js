
const TodoList =  JSON.parse(localStorage.getItem('TodoList')) || [];
 document.querySelector('.js-add-todo-btn')
 .addEventListener('click', () => {
    addTodo();
 });

 
function addTodo () {
    const inputElement =
    document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    
    TodoList.push({
        name,
        dueDate
    });
    
    inputElement.value = '';
    // to update web page
    updateTodoList();
    // to save in local storage
    saveToStorage();
} 
function updateTodoList () {
    let TodoListHTML = '';

    TodoList.forEach( (TodoObject, index) => {
        const {name, dueDate} = TodoObject;
        const html= `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-btn js-delete-todo-btn">Delete</button>
        `;
        TodoListHTML += html;

    });
    document.querySelector('.js-todo-list')
    .innerHTML = TodoListHTML;
    document.querySelectorAll('.js-delete-todo-btn')
     .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    TodoList.splice(index, 1);
            updateTodoList();
            saveToStorage();
    });

  });
}
 


function saveToStorage() {
    localStorage.setItem('TodoList', JSON.stringify(TodoList));
}