const images = ["0.jpg","1.jpg","2.png"];

const chosenImages = images[Math.floor(Math.random()*images.length)];

//html 에서 재료를 가져오는것이아닌
//js에서 재료를 주는 행위
//image 주소를 바꾸기 위해서
const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImages}`;
document.body.appendChild(bgImage);
