const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault();
  console.log(event);
}

function handleClickLink(event){
  //event : 이벤트에 대한 정보를 알려준다. 
  //브라우저를 다룬다.
  event.preventDefault();
  console.log(event);
  //모든것이 막혀있다가 OK를 누르면 다시 기본 동작이 실행된다.
  alert("clicked!"); 
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleClickLink);

