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

## project 2 link
[BMI](https://stackblitz.com/edit/dom-project-chaiaurcode-33a9fm?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //value will be in string->convert into int
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHtml = 'Please give valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHtml = 'Please give valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```