let a=10;
const b=20;
var c=30;  //var do not follow block scope

// console.log(a,b,c);


function one()               //one can acccess one variable->ariable of one will act as local
{
    let name="hemant";

    function two()            //two can access all variable of one and two->variable of one will act as global,variable of two act as local
    {
        let website="youtube";
        console.log(name);
    }
    //console.log(website);//error:scope of website is for two() only 

    two();
}

one();
