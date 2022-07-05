const textEditor = document.getElementById('editor');
const clearButton = document.querySelector('button');

textEditor.textContent = localStorage.getItem('text');

textEditor.addEventListener('input', () => {
  localStorage.setItem('text', textEditor.value);
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('text');
  textEditor.value = '';
});
