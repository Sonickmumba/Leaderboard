import postScoresToApi from './postScoresToApi.js';

const submitScore = () => {
  const form = document.querySelector('#score-form');
  const inputName = document.querySelector('#name');
  const inputScore = document.querySelector('#score');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postScoresToApi(inputName.value, inputScore.value)
      .then((response) => {
        if (response.result === 'Leaderboard scores are well created.') {
          window.location.reload();
        }
      });
    inputName.value = '';
    inputScore.value = '';
  });
};

export default submitScore;