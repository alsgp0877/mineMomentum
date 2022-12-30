const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");


//반복되는 string 들은 대문자 변수로 저장해놓는게 좋다. 오탈자 방지
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event){
  event.preventDefault();
  //이름을 보내면 form 없애기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //greeting.innerText  = "Hello" + username;
  localStorage.setItem(USERNAME_KEY,username); //우리가 dom api를 사용할 수 있는것 처럼 어디엔가 메소드를 저장해두는곳이있고 또 가져와서 쓸수 있는 곳이 있다.
  paintGreetings(username);

}

loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  //show the greetings
  paintGreetings(savedUsername);
}

