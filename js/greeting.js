const loginForm= document.getElementById("login-form");
const loginInput= document.getElementById("login-form input");
const greeting= document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onClickSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

   paintgreetings(username);
}

function paintgreetings(username){
    greeting.innerText = `hello + ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if( savedUserName ===0){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("click", onClickSubmit);
}
else{
    paintgreetings(savedUserName);
}

