import { loadSounds, addToggleSound, newGame, newGameSinglePlayer } from './util/gameUtil';
import { loadCharacters } from './util/characterUtil';

document.addEventListener('DOMContentLoaded', () => {
  const characters = loadCharacters();
  loadSounds();
  
  if (window.innerWidth < 1200) {
    alert('This game is best enjoyed on a full screen computer screen');
  }
 

  const singlePlayerBtn = document.querySelector('#single-player');
  const twoPlayerBtn = document.querySelector('#two-player');
  const startBtn = document.querySelector('#start');
  const instructions = document.querySelector('#instructions-container');
  const toggleSound = document.querySelector('#toggle-sound');

  singlePlayerBtn.addEventListener('click', () => {
    document.querySelector('#mode-selection').style.display = 'none';
    // document.querySelector
  });

  twoPlayerBtn.addEventListener('click', () => {
    document.querySelector('#mode-selection').style.display = 'none';
  });

  startBtn.addEventListener('click', () => {
    document.querySelector('#intro-section').style.display = 'none';
    startBtn.style.display = 'none';
    instructions.style.visibility = 'hidden';
    toggleSound.style.display = 'block';
    // let the games begin.
    addToggleSound();
    // newGame(characters);
    newGameSinglePlayer(characters[0]);
    // newGame(characters, true);
  })
});