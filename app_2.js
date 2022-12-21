//id로 html 접근하는 방법
const title = document.getElementById("title");
console.dir(title)
title.innerText="Got you!";

//classname으로 접근하는 방법
const hellos = document.getElementsByClassName("hello");
console.dir(hellos)


//tagename으로 접근하는 방법
//tag : anchor, div, serction, button 같은 것들을 의미
const hellot = document.getElementsByTagName("hello");
console.dir(hellot)

//queryselector로 접근하는 방법
//element를 css 방식으로 검색할 수 있다. 
//css selector 이다. 
//단 하나의 element를 return  해준다. 
//중복일땐 맨 위에 하나만 가져온다. 
const helloq= document.querySelector(".hello h1");
console.dir(helloq)

//중복된 여러개의 element를 가져오려고 할때 
const helloqa = document.querySelectorAll(".hello1 h1");
console.dir(helloqa)
