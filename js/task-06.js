const inputEl = document.querySelector('input[data-length]');
const limitValue = inputEl.getAttribute('data-length')


inputEl.addEventListener('blur', onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length <= limitValue) {
        inputEl.classList.add('valid');
         inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
         inputEl.classList.add('invalid');
    }
   
}

