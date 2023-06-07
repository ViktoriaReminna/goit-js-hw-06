const counterEls = document.getElementById('counter');
const counterVal = document.querySelector('#value');

const decrementBtn = counterEls.firstElementChild;

const incrementBtn = counterEls.lastElementChild;

let counterValue = 0;
decrementBtn.addEventListener('click', onClickDecrement);

function onClickDecrement() {
  counterValue -= 1;
  counterVal.textContent = counterValue;
}

incrementBtn.addEventListener('click', onClickIncrement);

function onClickIncrement() {
  counterValue += 1;
  counterVal.textContent = counterValue;
}
