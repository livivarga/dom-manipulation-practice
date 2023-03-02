console.log('hello');

const buttonElement = document.querySelector('.click-button');
const bodyElement = document.querySelector('body');
const rootElement = document.querySelector('#root');

buttonElement.innerHTML = 'Click on me!';

let darkTheme = false;

buttonElement.addEventListener('click', function() {
  console.log('clicked');
 
  darkTheme = !darkTheme;

  if (darkTheme === true) {
    buttonElement.innerHTML = 'dark theme is on';
    bodyElement.classList.add('dark');
  } else {
    buttonElement.innerHTML = 'dark theme is off';
    bodyElement.classList.remove('dark');
  }
});

setTimeout(function () {
  rootElement.insertAdjacentHTML('beforeend', '<p>Hello World!</p>');
  console.log('Hello World!');
}, 6000);


/* let num = 0;

buttonElement.addEventListener('click', function() {
  console.log('clicked');
  num++;
  console.log(num);
  buttonElement.innerHTML = `You clicked me: ${num}x`;
}); */

/*
buttonElement.addEventListener('mouseover', function() {
  console.log('the mouse is over the button');
  num++;
  console.log(num);
  buttonElement.innerHTML = `You clicked me: ${num}x`;
});
*/

