const categoriesEl = document.querySelector('#categories');

const liEls = categoriesEl.querySelectorAll('li.item');

console.log('Number of categories:', categoriesEl.children.length);

liEls.forEach(el => {
  const categoryEl = el.querySelector('h2').textContent;
  const liElements = el.querySelectorAll('li');
  console.log('Category:', categoryEl);
  console.log('Elements:', liElements.length);
});
