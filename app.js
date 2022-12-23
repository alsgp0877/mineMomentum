const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

//이벤트리스너 함수는 만들어지고 실행될때 브라우저에 의해 매개변수에 정보를 준다.
//모든 이벤트리스너 함수의 첫번째 매개변수는 항상 지금 막 벌어진 일들에 대한 정보가 된다. 
//JS는 그 정보를 무료로 제공하고 우리는 공간만 제공하면 된다.
function onLoginSubmit(tomato){
  tomato.preventDefault();
  //이벤트의 기본행동이 되지 않도록 막는것. 기본행동이란 어떤 함수에 대해 브라우저가 기본적으로 수행하는 동작
  //ex) form 을 submit 하면 새로고침 된다 -> 이 기본 동작을 막는다.
  //const username = loginInput.value;
  console.log(tomato);
}

loginForm.addEventListener("submit",onLoginSubmit)

