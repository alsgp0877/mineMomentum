const API_KEY = "c1489050262df42863bbf33cac8fe63b";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);

  //url을 직접 부를 필요 없이 fetch가 불러준다.
  fetch(url).then(resonse => resonse.json()).then(data=>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
  });

}
function onGeoError(){
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);