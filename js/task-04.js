const counterEl = document.querySelector('#counter');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const countEl = document.querySelector('#value');



let counterVelue = 0;

const decrementClick = () => {
    counterVelue -= 1
    countEl.textContent = counterVelue;
};

decrementEl.addEventListener("click", decrementClick);


const incrementClick = () => {
    counterVelue += 1
    countEl.textContent = counterVelue;
}
incrementEl.addEventListener("click", incrementClick);