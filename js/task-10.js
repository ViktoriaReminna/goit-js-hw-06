function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.getElementById('controls');
// console.log(controlsEl);
const inputEl = controlsEl.firstElementChild;

const createBtn = controlsEl.querySelector('[data-create]');

const destroyBtn = controlsEl.querySelector('[data-destroy]');

const divBoxes = document.getElementById('boxes');

// console.log(divBoxes);

const createBoxes = amount => {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = '30px';
    divEl.style.height = '30px';
    divBoxes.appendChild(divEl);
  }
};

const onCreateBtnClick = () => {
  createBoxes(inputEl.value);
};

createBtn.addEventListener('click', onCreateBtnClick);

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
  inputEl.value = '';
};

destroyBtn.addEventListener('click', destroyBoxes);
