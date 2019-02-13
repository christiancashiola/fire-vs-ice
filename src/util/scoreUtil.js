import $ from 'jquery';
import { playAgain, muteSounds } from './gameUtil';

const postScore = (initials, score) => (
  $.ajax({
    method: 'POST',
    url:  'https://fire-vs-ice.firebaseio.com/.json',
    data: JSON.stringify({
      'initials': `${initials}`,
      'score': score
    })
  })
);

const getScores = () => (
  $.ajax({
    method: 'GET',
    url:  'https://fire-vs-ice.firebaseio.com/.json',
  })
);

export const getTopFiveScores = () => {
  getScores()
    .then(scores => {
      scores = Object.values(scores);
      scores.sort((a, b) => b.score - a.score).slice(0, 5);
      insertScores(scores);
      showScoreBoard();
    });
}

export const enterInitials = score => {
  const curtain = document.querySelector('#curtain');
  curtain.style.visibility = 'visible';
  const form = document.querySelector('#score-submission');
  const playerScore = document.querySelector('#player-score');
  playerScore.innerText = score;
  form.style.display = 'flex';
  muteSounds();  
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('#score-submit-btn').focus();
    const initials = e.target[0].value;
    postScore(initials, score)
      .then(() => {
        getTopFiveScores();
      });
  });
}

const insertScores = scores => {
  let initials, highScore, lis = [];
  for (let i = 0; i < scores.length; i++) {
    initials = document.createElement('li');
    initials.innerText = scores[i].initials;
    lis.push(initials);
    highScore = document.createElement('li');
    highScore.innerText = scores[i].score;
    lis.push(highScore);
  }

  const highScoresWrapper = document.querySelector('#high-scores-wrapper');
  for (let i = 0; i < lis.length; i++) {
    highScoresWrapper.appendChild(lis[i]);
  }
}

const showScoreBoard = () => {
  const form = document.querySelector('#score-submission');
  const highScoreContainer = document.querySelector('#high-scores-container');
  form.style.display = 'none';
  highScoreContainer.style.display = 'flex';
  playAgain();
}