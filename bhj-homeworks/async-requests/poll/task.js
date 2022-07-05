const REQUEST_URL = 'https://netology-slow-rest.herokuapp.com/poll.php';

const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const popup = document.querySelector('.popup-wrapper');
const closePopup = document.getElementById('close-popup');

const xhr = new XMLHttpRequest();
xhr.open('GET', REQUEST_URL);
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    pollTitle.textContent = xhr.response.data.title;
    for (let answers in xhr.response.data.answers) {
      pollAnswers.innerHTML += `
        <button class="poll__answer">
          ${xhr.response.data.answers[answers]}
        </button>
      `;
    }

    const answers = document.querySelectorAll('.poll__answer');

    Array.from(answers).forEach((answer) => {
      answer.addEventListener('click', () => {
        popup.classList.remove('popup-wrapper_hidden');
      });
    });

    closePopup.addEventListener('click', () => {
      popup.classList.add('popup-wrapper_hidden');
    });
  } else {
    console.error(xhr.statusText);
  }
});
