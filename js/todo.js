const todoForm= document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList= document.querySelector("#todo-list");

let todos = [];
// list에 중복 아이템이 있을 때 다른 것을 지우면 안되니까 각 아이템에 대한 랜덤한 아이디를 부여함 - Date.now()라는 함수는 랜덤한 숫자를 생성해주기 때문에 Id로 사용! 

function savetodos(){
    // save contents of the todos array
    // change anything into javascript string 
    // ex, const player = { name: "nico "}일때 json.stringify하면, javascript object/array change into a string
    // localStorage cannot save arrays so we will at this point save the todos text via JSON.stringify to make it look like a array
    //  localStorage안에는 배열은 저장되지 않고 텍스트만 저장되기 때문에 JSON.stringify를 이용해서 배열 형태로 저장
    // a,b,c,d -> stringify "["a","b","c","d"]" -> parse ["a","b","c","d"] (각자 꺼낼수 있게 만듦) -> foreach()a\n b\n c\n d\n (for 구문 없이도 하나씩 아이템을 function에 넣을 수 있음)
    // To save it we have to turn it into string. To use it we have to parse it.
//     // todolist 를 작성해서 이용하려면,(이상황에서는 지우려면) array를 작성하고 싶을 시 문자도 있지만 숫자도 있음, but js는 string만 저장하니, 모든 list를 일단 기본으로 string 화 시켜줘야해 그 다음에 parse라는 함수를 사용해서 array로 쓸 수 있도록 작성
//     localStorage saves strings.

// To load the toDos, we load the string from localStorage and to turn it into JS we use JSON.parse()

// JSON.parse() takes a string and gives us a JS object.

// We put the results of JSON.parse() inside of `toDos`

// After we add more toDos and we want to save them, we take the `toDos` and put them through JSON. stringify()

// JSON.stringify() takes a JS object and turns it into a string.

// After we get that string, we put it on localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(event){
    event.preventDefault();
    const li = event.target.parentElement;
    li.remove();
    // li.id는 string이여서 parseInt 붙여둬야 됨
    // 지운 얘들만 빼고 다시 새로 array를 만들 때!
    todos= todos.filter((toDo) => toDo.id !==parseInt(li.id));
    savetodos();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // object로 저장되어서 text 와 id 중 텍스트만 저장됨
    span.innerText = newTodo.text;
    li.appendChild(span);
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteTodo);
    btn.innerText = "⚽️";
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleToDoSubmit (event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value="";
    // everytime I make new list, I push it to the todo array into the local storage
    // I am pushing not the text, but the object. 스트링이 아닌 object를 이제 저장하게 됨 , identify each li with ID
    const newTodoobj ={
        text: newTodo,
        id: Date.now(),
    };
    // everytime, we put value, we are adding the text, so instead the txt, we are putting the object to remember with an ID 
    todos.push(newTodoobj);
    paintTodo(newTodoobj);
    savetodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// local storage는 todos array를 복사해두는 곳임 둘은 다른 것임
const savedtodo = localStorage.getItem("todos");

if (savedtodo !== null){
    
    const parsedtodos = JSON.parse(savedtodo);
    // if there is old todos in the local storage, then we will restore the todos from the local storge
    todos= parsedtodos;
    // execute each function in the array
    parsedtodos.forEach(paintTodo);
    // now only the new ones are being saved, not the old ones ㅠㅠ
        
    }

//Filter함수는 지우고 싶은 아이템은 빼고 새로 array를 만듦
// 반드시 true를 리턴해야 array에 있는 그 외 아이템이 save 됨