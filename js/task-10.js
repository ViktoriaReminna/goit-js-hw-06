function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.getElementById('controls');

const inputEl = controlsEl.firstElementChild;

const createBtn = controlsEl.querySelector('[data-create]');

const destroyBtn = controlsEl.querySelector('[data-destroy]');

const divBoxes = document.getElementById('boxes');

const createBoxes = amount => {
  const currentWidth = 30;
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();

    const afterClickWidth = currentWidth + i * 10;
    divEl.style.width = `${afterClickWidth}px`;
    divEl.style.height = `${afterClickWidth}px`;
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
