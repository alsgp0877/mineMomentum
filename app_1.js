// const a = 5;
// const b = 2;
// let myName = "nico";
// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello" + myName);

// myName ="mine";

// console.log("your new name is" + myName);

const amIFat = true;
console.log(amIFat);
const amIFat2 = null; //비어있는것이아니라 아무것도 없는 상태를 뜻함
console.log(amIFat2); //null
let amIFat3; //컴퓨터 메모리안에는 존재함. 공간은 있는데 값이 들어가지 않은것
console.log(amIFat3); //undefined


const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
console.log(daysOfWeek);
daysOfWeek.push("sun");


const player={
  name:"mine",
  points:10,
  fat:true,
};

player.fat = false; //const는 수정이 안된다고 했는데 왜 되냐? player = false 이렇게 하면 수정이 안되는데 안에 개별적으로는 수정이 가능하다고 한다. 이거는 자바 객체 에서도 그랬던것 같다. 
player.lastNmae = "photo";//추가도 가능하다.
console.log(player);

function sayHello(){
  console.log("hello my name is mine");
}
sayHello();

function sayHelloParam(name,age){
  console.log(name,age);

}
sayHelloParam("mine",26);

const playerFunction={
  name:"mine",
  points:10,
  fat:true,
  sayHello:function(name){
    console.log("hello my name is " + name +" in objects");
  }
};
playerFunction.sayHello("choemine");

const toBuys = ["potato","tomato"];
toBuys[2] = "water";
toBuys.push("meat");
console.log(toBuys);

const calculator = { 
  add:function(a,b){
    console.log("a+b=" + (a + b));
  },
  minus:function(a,b){
    console.log("a-b=" + (a - b));
  },
  div:function(a,b){
    console.log("a/b=" + (a / b));
  },
  dou:function(a,b){
    console.log("a*b=" + (a * b));
  }
}

const calculatorReturn = { 
  add:function(a,b){
    return a + b;
  },
  minus:function(a,b){
    return a - b;
  },
  div:function(a,b){
    return a / b ;
  },
  dou:function(a,b){
    return a * b;
  }
}

const plusResult = calculatorReturn.add(5,1);
console.log("plusResult : " +  plusResult);
const minusResult = calculatorReturn.minus(plusResult,1);
console.log("minusResult : " +  minusResult);

const age = parseInt(prompt("how old are you?"));//아주 옛날 방법! 
console.log(typeof age);//변수의 타입을 알 수 있음. 

console.log(isNaN(age));//매개변수가 숫자인지 검사하는 함수. Not a Number
//굳이 쓰는이유? parseInt(숫자)를 써주면 이상적이지만 parseInt(;멍;람) 이렇게 쓸수 도 있는것 그러면 NaN을 표출한다.
if(isNaN(age) || age < 0){
  console.log("Pleas write a real positive number!");
}else if(age<18){
  console.log("You are too young.");
}else if(age >=18 && age<=50){
  console.log("You can drink");
}else if(age >50 && age<=80){
  console.log("You should exercise");
}else if(age === 100){
  console.log("You are wise");
}else if(age >80){
  console.log("You can do whatever you want.");
}










