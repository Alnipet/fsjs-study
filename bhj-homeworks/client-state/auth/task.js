const signinForm = document.forms.signin__form;
const signInBtn = document.getElementById('signin__btn');
const signOutBtn = document.getElementById('signout__btn');
const welcome = document.getElementById('welcome');
const errorLogin = document.getElementById('error-login');

if (localStorage.user) {
  userGreeting(localStorage.user);
}

signInBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.responseType = 'json';
  xhr.send(formData);

  xhr.addEventListener('load', () => {
    if (xhr.response.success) {
      localStorage.user = xhr.response.user_id;
      userGreeting(xhr.response.user_id);
      signinForm.reset();
    } else {
      errorLogin.classList.add('active-message');
      signinForm.login.classList.add('control_error');
      signinForm.password.classList.add('control_error');

      signinForm.password.value = '';
    }
  });
});

signOutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem('user');

  welcome.classList.remove('active-message');
  signInBtn.classList.remove('btn_hidden');
  signOutBtn.classList.add('btn_hidden');
});

function userGreeting(user) {
  document.getElementById('user_id').textContent = user;

  errorLogin.classList.remove('active-message');
  welcome.classList.add('active-message');

  signinForm.login.classList.remove('control_error');
  signinForm.password.classList.remove('control_error');

  signInBtn.classList.add('btn_hidden');
  signOutBtn.classList.remove('btn_hidden');
}
