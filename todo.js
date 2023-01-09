const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY="todos";

let toDos = []; //여기가 비어있기 때문에 덮어씌기만 되고 이전 데이터가 없다.

//어떤 것을 클릭했는지 알 수 없어서 대안찾는중
//event 가 click 된 위치를 알려준다는 것을 알 수 있다.
//이것이 의미하는게 클릭 target이 무엇인지를 체크할 수 있다는 것.
//target은 클릭된 HTML element, HTML element은 하나이상의 property가 있다.

function saveToDos(){
  //단순텍스트가 아니라 배열로 저장되길 원한다.
  //stringify는 object value 형이든 array이든 다 string으로 바꿔준다.
  localStorage.setItem("TODOS_KEY",JSON.stringify(toDos));
}
function deleteToDo(event){
  const li = event.target.parentElement;//target은 클릭된 HTML element
  li.remove();
}
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo)
  li.appendChild(button);

  toDoList.appendChild(li);
}
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);//할일을 하나씩 submit할때마다 배열에 쌓이고 새로고침하면 사라짐. submit할때 새로고침하는걸 막았으니 가능함.나는 submit할때 새로고침되면 글이 사라지는데 어떻게 되나 싶었네 ㅋㅋ
  paintToDo(newTodo);
  saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(saveToDos !== null){
  const parsedToDos = JSON.parse(saveToDos);  //string을 array로 바꿔준다.
  toDos = parsedToDos;
  //forEach는 item을 제공해준다.
  parsedToDos.forEach(paintToDo);
}
