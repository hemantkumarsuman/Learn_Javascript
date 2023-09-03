//Functions
//
function myName()
{
    // console.log("Hemant");
    // console.log("Kumar");
    // console.log("Suman");
}
myName //refernce
myName();//Execution


let a=10,b=20;
function addTwoNum(num1,num2)  //here num1,num2 are called parameter 
{
    let num3=num1+num2;
    return num3;             //return  statement should be last line of function
}
let num4=addTwoNum(a,b);//Here a,b are called arguments
// console.log(num4);//OUTPUT=30

// find OUTPUT

// function addTwoNum(num1,num2)  //here num1,num2 are called parameter 
// {
//     let num3=num1+num2;
//     return num3;
// }
// let result=console.log(addTwoNum(a,b));//Here a,b are called arguments
// console.log(result);
// OUTPUT:
// 30  -> come from console.log
// undefined  -> result will not store any number becaz we are not aasigning any value to result instead we are logging

function logUserMessage(name)
{
    return `${name} logged in`
}
 let result=logUserMessage("Hemant");
//  console.log(result);

//  default parament in function
function logUserMessage(name="Luffy")   //Default parameter works when we do not give argument while function execution
{
    return `${name} logged in`
}
 let result1=logUserMessage();
//  console.log(result1);


 //Shopping cart situation->user keep on adding item in cart->calculate total price of all item as item come in cart
 //Here we do not number of item coming in cart but we have to add price of each item and show total price
//For this we use rest operator
 function calculateCartPrice(...itemPrice)//rest operator syntax 
 {
     return itemPrice;
 }
//  console.log(calculateCartPrice(200,300,600));//Here we will receive array of itemPrice [ 200, 300, 600 ]
//  Then add all itemPrice in array

//Another way people use this operator to add
function calculateCartPrice(val1,val2,...itemPrice)//rest operator syntax 
{
    return itemPrice;
}
// console.log(calculateCartPrice(200,300,600,130));//here val1=200,val2=300,itemPrice=[ 600, 130 ]



// Function with OBJECT
const userInfo={
    name:"Hemant",
    age:24
}
function extractUserInfo(userInfo)
{
    let info=`Username is ${userInfo.name} and age of ${userInfo.name} is ${userInfo.age}`;
    return info;
}
console.log(extractUserInfo(userInfo));

//We can define object in function parameter
function extractUserInfo(userInfo={
    name:"Hemant",
    age:24
}){
    let info=`Username is ${userInfo.name} and age of ${userInfo.name} is ${userInfo.age}`;
    return info;
}
console.log(extractUserInfo(userInfo));

