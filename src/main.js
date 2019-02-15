import { loadSounds, addToggleSound, newTwoPlayerGame, newSinglePlayerGame } from './util/gameUtil';
import { loadCharacters } from './util/characterUtil';
import { addMobileControls } from './util/mobileUtil';

let players, mode, characters;
document.addEventListener('DOMContentLoaded', () => {
  characters = loadCharacters();
  window.addEventListener('resize', checkScreen);
  checkScreen();
  loadSounds();
  handleSinglePlayerClick();
  handleTwoPlayerClick();
  handleStartClick();
});

const checkScreen = () => {
  if ((typeof window.orientation !== "undefined")||
    (navigator.userAgent.indexOf('IEMobile') !== -1) ||
    (window.innerWidth < 480)) {
    startSinglePlayerMode();
    addMobileControls();
    document.querySelector('#fire-controls-wrapper').style.display = 'none';
    document.querySelector('#ice-controls-wrapper').style.display = 'none';
  }
};

const handleSinglePlayerClick = () => {
  const singlePlayerBtn = document.querySelector('#single-player');
  singlePlayerBtn.addEventListener('click', startSinglePlayerMode);
};

const startSinglePlayerMode = () => {
  const goal = document.querySelector('#two-player-goal');
  goal.style.display = 'none';
  document.querySelector('.selection-section').style.display = 'none';
  const character1 = document.querySelector('#character-1');
  character1.addEventListener('click', () => {
    players = characters[0];
    setupSinglePlayerMode();
  });

  const character2 = document.querySelector('#character-2');
  character2.addEventListener('click', () => {
    players = characters[1];
    setupSinglePlayerMode();
  });
};

const handleTwoPlayerClick = () => {
  const twoPlayerBtn = document.querySelector('#two-player');
  const goal = document.querySelector('#single-player-goal');

  twoPlayerBtn.addEventListener('click', () => {
    goal.style.display = 'none';
    document.querySelector('.selection-section').style.display = 'none';
    players = characters;

    mode = newTwoPlayerGame;
    document.querySelector('#selection-2').style.display = 'none';
  });
};

const setupSinglePlayerMode = () => {
  mode = newSinglePlayerGame;
  document.querySelector('#selection-2').style.display = 'none';
};

const handleStartClick = () => {
    document.querySelector('#start').addEventListener('click', () => {
    const instructions = document.querySelector('#instructions-container');  
    document.querySelector('#instruction-section').style.display = 'none';
    document.querySelector('#toggle-sound').style.display = 'block';
    document.querySelector('#start').style.display = 'none';
    instructions.style.visibility = 'hidden';

    addToggleSound();
    mode(players);
  });
};