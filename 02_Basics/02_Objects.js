//There are 2 ways to declare object:1)Literal  2)Constructor

//1)Object Literal
const JsUser={
    name:"Hemant",
    "Full Name":"Hemant Kumar",
    age:24,
    location:"Bangalore",
    email:"hemant@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);


//We can change value of object property
JsUser.email="hemant@google.com"
console.log(JsUser);

//We can also freeze the object so that property and method of Object can not be changed
Object.freeze(JsUser);

JsUser.email="hemant.microsoft.com"
console.log(JsUser);//email will be "hemant@google.com"



//Question=>Declare a symbol(datatype),make that symbol as keys in object and print that symbol???
const mySym=Symbol("task1");//declare symbol

const task={    //Object
    //mySym:"task2" , //This will not give any error but type of mySym is string.
    [mySym]:"task3", //This is the correct way
}

// console.log(task.mySym);
// console.log(typeof task.mySym);

// console.log(task[mySym]);     //correct way to access symbol
// console.log(typeof task[mySym]); 

// console.log(task);