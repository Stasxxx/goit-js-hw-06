function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body')
const textColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

// console.log(textColor.textContent = `${getRandomHexColor()}`);

btnChangeColor.addEventListener('click', () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  textColor.textContent = `${getRandomHexColor()}`;
});
