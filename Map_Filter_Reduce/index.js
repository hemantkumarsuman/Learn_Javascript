const users=[
    {firstname:"Luffy" ,lastname:"baka" ,age:21},
    {firstname:"zoro", lastname:"bakka", age:24},
    {firstname:"Sanji", lastname:"vinsmoke", age:24},
    {firstname:"Nami", lastname:"brunette",age:20}
];

//find firstname all user whose age>20
//Chaining->Filter map
const output1=
users.filter((user)=>{
   return user.age>20
})
.map((user)=>{
    return user.firstname;
})
console.log(output1);

//Using only reduce

const output2=users.reduce(function(acc,curr){
    if(curr.age>20)
    {
        acc.push(curr.firstname);
    }
    return acc;
},[])
console.log(output2);

