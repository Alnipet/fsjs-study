const REQUEST_URL = 'https://netology-slow-rest.herokuapp.com';

const items = document.getElementById('items');
const item = document.querySelector('.item');

const xhr = new XMLHttpRequest();
xhr.open('GET', REQUEST_URL);
xhr.responseType = 'json';
xhr.send();

xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const obj = xhr.response.response.Valute;
    for (let key in obj) {
      item.innerHTML = `
        <div class="item__code">
          ${obj[key].CharCode}
        </div>
        <div class="item__value">
          ${obj[key].Value.toFixed(2)}
        </div>
        <div class="item__currency">
          руб.
        </div>
      `;

      item.style.marginBottom = '15px';
      item.setAttribute('title', `${obj[key].Nominal} ${obj[key].Name}`);

      items.appendChild(item.cloneNode(true));
      document.getElementById('loader').classList.remove('loader_active');
    }
  } else {
    console.error(xhr.statusText);
  }
};
