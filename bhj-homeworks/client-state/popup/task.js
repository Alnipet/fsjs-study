const modalMain = document.getElementById('subscribe-modal');
const modalCloseElem = document.querySelector('.modal__close');

if (getCookie('status') && getCookie('status').match(/closed/)[0] === 'closed') {
  modalMain.className = 'modal';
} else {
  setTimeout(() => {
    modalMain.className += ' modal_active';
  }, 3000);
}

modalCloseElem.onclick = function () {
  modalMain.className = 'modal';
  setCookie('status', 'closed');
};

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}
