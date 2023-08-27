//Array 
//In Array Data type we can store multiple values in single variable
//Values can be of any type 
const arr=[1,2,3,4,5,"Hemant",true];

const arr1=new Array(1,2,3,4);//Using new Keyword



//JS Arrays are resizeable
//Zero based indexing
// console.log(arr1[1]);
//JS array-copy-operation create shallow copy

//METHODS
const myArr=[1,2,3,4,5];

//PUSH -> pushes element at end of original array
myArr.push(6);
// console.log(myArr);
//pop() -> delete last element  from array
myArr.pop();
// console.log(myArr);

//unshift() -> pushes element at start of original array
myArr.unshift(9);
// console.log(myArr);
//shift() -> delete start element  from array
myArr.shift();
// console.log(myArr);

//indexOf(element) -> gives index of element in array,if element is not present then return -1
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(18));

//includes(element) -> return true if element is present in array else return false
// console.log(myArr.includes(3));
// console.log(myArr.includes(18));

//slice(start,end) splice(start.end)
const newArr=[1,2,3,5,6,78,9];
// console.log("1 ",newArr);

// console.log(newArr.slice(2,5)); //new array got created and store values from start to end-1
// console.log("2 ",newArr);

// console.log(newArr.splice(3,6));//new array got created and store values from start to end. Also modify original array by deleting new array values
// console.log("3 ",newArr)

const char=["Luffy","Naruto","Tanjiro"];
const char2=["Zoro","Sasuke","Zenitsu"];
// char.push(char2);
// console.log(char);//char will take char2 as one data O/P:[ 'Luffy', 'Naruto', 'Tanjiro', [ 'Zoro', 'Sasuke', 'Zenitsu' ] ]

//Find value of Sasuke??
// console.log(char[3][1]);

let allChar=char.concat(char2); //return new array by combining char+char2
// console.log(allChar);//char+char2

//spread operator
let allCharacter=[...char,...char2];//We use this concat becaz if we would want to concat 3 arrays then we would have to do concat operation 2 time 
                                    //Whereas in case of spread operator we can do in single line

// console.log(allCharacter);

let allCharacter2=[...char,...char2,...newArr];//concat multiple array in single line
// console.log(allCharacter2);




