const login_form = document.querySelector(".opening_name_form");
const login_input= document.querySelector("#name_typed");
const name_submit= document.querySelector("#name_submit");
const greeting = document.querySelector("#greeting");


function onClickSubmit(event){
    event.preventDefault();
    const username_typed= login_input.value;
    login_form.classList.add("hidden");
    localStorage.setItem("username", username_typed);
    greetings(username_typed);
}
function greetings(username_typed){
    greeting.classList.remove("hidden");
    greeting.innerText=`hello + ${username_typed}`;
    
}

name_submit.addEventListener("click",onClickSubmit);

const saved_username = localStorage.getItem("username");

if (saved_username== null){
    login_form.classList.remove("hidden");
    name_submit.addEventListener("click",onClickSubmit);
}else{
    login_form.classList.add("hidden");
    greetings(saved_username);
}