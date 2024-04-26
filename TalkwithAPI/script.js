//Create project using dog API where when clicked on button image of dog changes

const image= document.querySelector('img');

const button= document.querySelector('.btn');



button.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((reponse)=>reponse.json())
    .then((res)=>{
        console.log(res);
        image.src = res.message;
})
});