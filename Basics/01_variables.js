//Variable assign space in memory 
const accountId=123456373
let accountEmail="hemant@gmail.com"//can be changed
let accountPassword="1234"//we do not use var becaz initially we did not have knowledge about scope
/*
Prefer not to use var becaz of issue in block/functional scope 
*/
accountCity="Ranchi"//javascript is safe language even without initializing variable it will store space in memory  
let accoutState; //In javascript is if we leave variable by declaration  and not initialize then o/p=undefined
//accountId=1223 //not allowed->accountId is const
console.log(accountId)
accountEmail="he@gmail.com"
accountPassword="fish"
accountCity="patna"

console.table([accountId,accountEmail,accountPassword,accountCity,accoutState])

