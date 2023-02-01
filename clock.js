//const clock = document.querySelector("h2#clock");
const clock = document.querySelector("#clock span");

//인터벌 : 매 2초마다 어떤 동작을 하게 하고 싶은것
//자바스크립트에선 해당 기능을 제공한다. 쓸때가 많기 때문에
function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText=`${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);