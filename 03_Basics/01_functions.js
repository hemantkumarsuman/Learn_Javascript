//Functions
//
function myName()
{
    console.log("Hemant");
    console.log("Kumar");
    console.log("Suman");
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


 //Shopping cart situation->user keep on adding item in cart->calculate total price of  item as item come in cart