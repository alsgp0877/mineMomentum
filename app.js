<<<<<<< HEAD
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  }else{
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick);
=======
const title = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
  title.style.color="blue";
}
function handleMouseEnter(){
  title.innerText="mouse is here";
}
function handleMouseLeave(){
  title.innerText="mouse is gone";
}
//handleTitleClick() x handleTitleClick o
//유저가 click 할 경우에 js가 실행버튼을 대신 눌러주길 바라는것이지 실행버튼을 눌러주길 바라는것이아니다.
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
>>>>>>> 9b62110f790330cdbcd4765df1752d42d8f9e5c3
