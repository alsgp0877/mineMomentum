const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");


//어떤 것을 클릭했는지 알 수 없어서 대안찾는중
//event 가 click 된 위치를 알려준다는 것을 알 수 있다.
//이것이 의미하는게 클릭 target이 무엇인지를 체크할 수 있다는 것.
//target은 클릭된 HTML element, HTML element은 하나이상의 property가 있다.
function deleteToDo(event){
  //8:56
}
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
  

}
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);

}

toDoForm.addEventListener("submit",handleToDoSubmit);