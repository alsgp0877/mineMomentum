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
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(event){
  const li = event.target.parentElement;//target은 클릭된 HTML element
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //DB에 저장된 데이터를 가져와서 삭제하려고 클릭한 데이터를 제외하기
  saveToDos();
}
function paintToDo(newTodoObj){
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
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
  //삭제를 위해서는 어떤 걸 삭제하는지에 대한 고유 ID가 있어야 접근가능하다.
  //객체로 만들어서 아이디와 값을 같이 넣어준다.
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  }
  toDos.push(newTodoObj);//할일을 하나씩 submit할때마다 배열에 쌓이고 새로고침하면 사라짐. submit할때 새로고침하는걸 막았으니 가능함.나는 submit할때 새로고침되면 글이 사라지는데 어떻게 되나 싶었네 ㅋㅋ
  paintToDo(newTodoObj);
  saveToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

//그냥 순서대로 내려오다보니 여기가 실행되서 DB에 있는 데이터가 나오는듯?
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);  //string을 array로 바꿔준다.
  toDos = parsedToDos;
  //forEach는 item을 제공해준다.
  parsedToDos.forEach(paintToDo);
}


//parsedToDos.forEach(paintToDo); 코드처럼 배열의 각 요소마다 함수를 달아주는것을 할것이다 그것이 filter
//filter은 배열에서 요소를 진짜 지우는것이 아니라 지우고 싶은 요소를 빼고 새 배열을 만든다.
//item을 지우는게 아니라 item을 제외한다.
//직동방법
//function을 [1,2,3,4] 배열 요소의 갯수만큼 4번을 부르고 false를 리턴하면 그 요소는 새 배열에 포함되지 않는다. true는 반대
// [1,2,3,4].filter(functions());
// functions(1) t
// functions(2) t
// functions(3) f
// functions(4) t
//3빼고 1,2,4만 유지한다.



