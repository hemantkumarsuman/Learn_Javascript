//Object constructor

const User={};
User.id=123;
User.name="Hemant";
User.email="hemant@gmail.com";
User.greeting=function(){
    console.log("Hello Guys")
};

// console.log(User.greeting);

//Nested Objects
const NestObject={
    name:"Hemant",
    fullName: {
        firstName:"Hemant",
        lastName:"Kumar"
    }
}
// console.log(NestObject);

//Access lastName
const lastName=NestObject.fullName.lastName;
console.log(lastName);

//How to combine multiple Objects 

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj3={
    5:"a",
    6:"b"
}

//1.
// const obj4={obj1,obj2,obj3};
// console.log(obj4);

//2.Using assign method
// const obj4=Object.assign({},obj1,obj2,obj3)//Here {} will store obj1,obj2,obj3
// console.log(obj4);

//3.Using spred Operator
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);