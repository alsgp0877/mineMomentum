const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
  event.preventDefault();
  //이름을 보내면 form 없애기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //greeting.innerText  = "Hello" + username;
  greeting.innerText  = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit",onLoginSubmit);

