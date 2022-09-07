import './style.css';
import displayScore from './modules/displayStore.js';

const refreshBtn = document.querySelector('#refresh-btn');
const scoreContainer = document.querySelector('.container');
refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scoreContainer.innerHTML = '';
  displayScore();
});

displayScore();
