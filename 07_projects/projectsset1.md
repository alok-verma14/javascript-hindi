# Projects Related to DOM
## Project Link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution code
## project 1
```javascript
    const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```

## Project 2 Solution

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ` Please enter a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi} - Under Weight <span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span> ${bmi} - Normal Range <span>`;
    } else {
      results.innerHTML = `<span> ${bmi} - Overweight <span>`;
    }
  }
});


```

## Project 3 Solution

```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```