//Implement Curring

function curry(func){
    return function curriedFunc(...args){
        if(func.length <= args.length){
            return func(...args);
        }

        else{
            return function(...next){
                return curriedFunc(...args,...next);
            };
        }
    };
}

const sum=(a,b,c,d)=>a+b+c+d;

const totalSum=curry(sum);

console.log(totalSum(2)(1)(3)(4));


//Write Curry function to multiply number 1,2,3=>mul(a)(b)(c)

function mul(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

const multiply = mul(7)(2)(3);

console.log(multiply);

//Infine curring => sum(1)(2)(3)...(n)
function sumN(a){
    return function(b){
        if(b){
            return sumN(a+b);
        }
        return a;
    }
};

let ans = sumN(1)(2)(4)(6)();
console.log(ans);