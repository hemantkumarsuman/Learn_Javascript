//Higher Order Function

// ["","",""]
// [{},{},{}]

//for of -> We do not require to initialize or iterates 
// const arr=[1,2,3,4,5,6];
// for (const i of arr) {
//     let res=i;
//     console.log(res);
// }

// const str="Hello World";
// for (const i of str) {
//     console.log(`Each char is ${i}`);
// }

//Object
const myObject={
    'game1': 'NFS',
    'game2': 'PUBG',
    'game3': 'COC'
}
// for (const [game,value] of myObject) {       //Object can not be iterable using forof
//     console.log(game,"=>",value);
// }