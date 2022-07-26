function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1){
    const size = boxSize + i * 10;
    const div = `<div style= "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; "></div>`
    boxes.insertAdjacentHTML("beforeend",div)
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value= "";
}