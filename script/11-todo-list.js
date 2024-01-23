const todoList = [''];
renderTodoList();
function renderTodoList (){
let todoListHTML = '';
for (let i = 0; i <= todoList.length - 1; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
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
    todoList.push(name);
    inputElement.value = '';
    renderTodoList();
}