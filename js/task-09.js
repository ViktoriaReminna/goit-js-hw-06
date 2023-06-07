function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backColor = document.querySelector('body');
const btnEl = backColor.querySelector('.change-color');
const span = backColor.querySelector('.color');

const onColor = () => {
  const changeColor = getRandomHexColor();
  backColor.style.backgroundColor = changeColor;
  span.textContent = changeColor;
};

btnEl.addEventListener('click', onColor);
