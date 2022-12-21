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
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

//title.addEventListener("click",handleTitleClick);
title.onclick=handleTitleClick;//위와 다른 이벤트 등록 방법
//document.body title head 같이 중요한것만 되고 나머지는 다 가져오는 함수 사용해야함
function handleWindowResize(){
  document.body.style.backgroundColor="red";
}
function handleWindowCopy(){
  alert("copier!!");
}
function handleWindowOffline(){
  alert("SOS no WIFI!!");
}
function handleWindowOnline(){
  alert("GOOD WIFI!!");
}
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

