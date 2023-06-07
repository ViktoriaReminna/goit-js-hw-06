const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInput);
function onInput() {
  const inputValue = input.value.trim();
  const dataLength = Number(input.getAttribute('data-length'));

  if (inputValue.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
