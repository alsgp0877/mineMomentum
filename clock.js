const clock = document.querySelector("h2#clock");

//인터벌 : 매 2초마다 어떤 동작을 하게 하고 싶은것
//자바스크립트에선 해당 기능을 제공한다. 쓸때가 많기 때문에
function getClock(){
  const date = new Date();
  clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock,1000);