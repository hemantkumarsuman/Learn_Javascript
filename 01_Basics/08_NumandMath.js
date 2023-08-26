//Number
const score=400;
// console.log(score);
const balance=new Number(100);//explicit way to initilize number
// console.log(balance);

// console.log(balance.toString().length);//Number to string
// console.log(balance.toFixed(2));//

//MATHS
// console.log(Math);//Math is default library in JS
// console.log(Math.abs(-9))//Output=9
// console.log(Math.round(45.56))//Output=46
// console.log(Math.exp(4));
// console.log(Math.floor(4.2));//immediate lowest int value
// console.log(Math.floor(4.9));//immediate lowest int value
// console.log(Math.ceil(4.2));//immediate upper int value 
// console.log(Math.ceil(4.9));//immediate upper int value 
//Uses

console.log(Math.random());//value always between 0 to 1
// If we want to design some game where random lies between 1 to 100

console.log((Math.random()*100)+1);//

//Now we want value between 10 to 20
const min=10;
const max=20;
console.log(Math.floor((Math.random() * (max-min+1)) + min));
