const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text');

const changeInput = event => {
    textEl.style.fontSize = `${event.target.value}px`;
    console.log(textEl.style.fontSize)
}

inputEl.addEventListener('input', changeInput);