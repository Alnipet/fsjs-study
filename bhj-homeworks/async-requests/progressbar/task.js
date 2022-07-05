const REQUEST_URL = 'https://netology-slow-rest.herokuapp.com/upload.php';
const form = document.forms.form;
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  xhr = new XMLHttpRequest();
  xhr.open('POST', REQUEST_URL);

  xhr.upload.addEventListener('progress', (e) => {
    progress.value = (e.loaded / e.total).toFixed(2);
  });

  xhr.upload.addEventListener('load', (e) => {
    document.getElementById('finished-upload').textContent = `Файл размером ${e.loaded} байт успешно загружен`;
  });

  xhr.send(formData);
});
