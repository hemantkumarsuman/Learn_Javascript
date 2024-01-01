// function counter(){
//     var count=0;
//     function incrementCount(){
//         count++;
//         console.log(count);
//     }
//     return incrementCount;
// }
// var ans=counter();
// ans();
// ans();

function outest(){
    var c=19;
    function outer(){
        function inner(){
            let a=10;
            console.log(a, c);
        }
        return inner;
    }
    return outer;
}

var ans=outest();
var output=ans();
output();