import { loadSounds, addToggleSound, newTwoPlayerGame, newSinglePlayerGame } from './util/gameUtil';
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

  let players, mode;
  singlePlayerBtn.addEventListener('click', () => {
    document.querySelector('.selection-section').style.display = 'none';
    document.querySelector('#character-1').addEventListener('click', () => {
      players = characters[0];
      mode = newSinglePlayerGame;

      document.querySelector('#selection-2').style.display = 'none';

    });
    document.querySelector('#character-2').addEventListener('click', () => {
      players = characters[1];
      mode = newSinglePlayerGame;

      document.querySelector('#selection-2').style.display = 'none';

    });

    // document.querySelector
  });

  twoPlayerBtn.addEventListener('click', () => {
    document.querySelector('.selection-section').style.display = 'none';
    players = characters;

    mode = newTwoPlayerGame;
    document.querySelector('#selection-2').style.display = 'none';
  });

  startBtn.addEventListener('click', () => {
    document.querySelector('#instruction-section').style.display = 'none';
    startBtn.style.display = 'none';
    instructions.style.visibility = 'hidden';
    toggleSound.style.display = 'block';
    // let the games begin.
    addToggleSound();
    // newGame(characters);
    mode(players);
    // newGame(characters, true);
  })
});