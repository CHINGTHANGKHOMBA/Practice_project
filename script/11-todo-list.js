const todoList = [];
function addTodo(){
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';

}