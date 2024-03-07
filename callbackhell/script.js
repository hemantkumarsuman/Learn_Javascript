const h1=document.querySelector('.h1');
const h2=document.querySelector('.h2');
const h3=document.querySelector('.h3');
const btn=document.querySelector('.btn');

// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         console.log('green');
//         h1.style.color='green';
//     },5000);
//     setTimeout(()=>{
//         console.log('red');
//         h2.style.color='red';
//     },4000);
//     setTimeout(()=>{
//         console.log('blue');
//         h3.style.color='blue'
//     },5000);
// }

// );

btn.addEventListener('click',()=>{
    setTimeout(()=>{
        console.log('green');
        h1.style.color='green';

        setTimeout(()=>{
            console.log('red');
            h2.style.color='red';

            setTimeout(()=>{
                console.log('blue');
                h3.style.color='blue'
            },5000)
        },4000)
    },5000)
});


console.log(('hi'||[]).length);


//curring mul functiom
// function mul(a){
//     return function(b){
//         return function(c){
//             return a* b*c;
//         }
//     }
// }

// console.log(mul(11)(5)(8));

