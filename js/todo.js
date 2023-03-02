const todoForm= document.querySelector("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList= document.querySelector("todo-list");

let todos = [];
function savetodos(){
    localStorage.setItem("todos",json.stringify(todos));

}

function deleteTodo(event){
    const li= event.targetparentElement;
    li.remove();
    todos = todos.filter
}

function paintTodo(){
const li = document.createElement("li");
li.id= newTodo.id
const span = document.createElement("span");
span.innerText= newTodo.value;
const button = document.createElement("button");
button.innerText="X";
li.appendChild("span");
li.appendChild("button");
todoList.appendChild("li");
}
function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value="";
    paintTodo()
}

function savetodo(){

}





todoForm.addEventListener("submit", handleToDoSubmit);

const savedtodos = localstorage.getItem(todoskey);
if savedtodo !==null{
    paintt
}