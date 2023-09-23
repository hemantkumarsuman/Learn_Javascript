# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solution code

## project 1 link
[colorchange](https://stackblitz.com/edit/dom-project-chaiaurcode-kzhgur?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)
```javascript
//step1:First select all buttons
//step2:select body to change body color
//step3:capture mouse click event and change the color of body

const buttons = document.querySelectorAll('.button');
//console.log(buttons)
const body = document.querySelector('body');
//console.log(body)

buttons.forEach(function (button) {
  //click event
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```