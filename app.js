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
