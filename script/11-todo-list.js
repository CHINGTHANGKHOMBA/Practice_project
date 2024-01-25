const todoList = [{
    name: '',
    dueDate: ''
}, {
    name: '',
    dueDate: ''
}];
renderTodoList();
function renderTodoList (){
let todoListHTML = '';
for (let i = 0; i <= todoList.length - 1; i++){
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    // const {dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate} </div>
        <button onClick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
}

document.querySelector('.js-input-list').innerHTML = 
todoListHTML;}

function handleListKeyDown(event){
    if (event.key === 'Enter'){
   addTodo();
 }
    }

function addTodo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        // task: task,
        // dueDate: dueDate
        name,
       dueDate
    });
    inputElement.value = '';
    renderTodoList();
}