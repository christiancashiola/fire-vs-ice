import Sound from '../sounds/sound';
import setupGreenBackdrop from '../board/greenBackdrop';
import addStaticWalls from '../walls/staticWalls';
import addBreakableWalls from '../walls/breakableWalls';
import { addPowerUp } from '../powerUps/powerUp';
import { addShield } from '../powerUps/shield';
import Player1 from '../characters/player1';
import Player2 from '../characters/player2';
import { addSpikes } from '../traps/spikes';
import { startTimer, getTimerScore, stopTimer } from './timerUtil';

let explosionSound,
    shieldSound, 
    player1, 
    player2,
    powerUpSound,
    spikeSound, 
    gameOverSound,
    music;

export const newSinglePlayerGame = playerState => {
  initialSetup();
  if (playerState.id === 1) {
    player1 = new Player1(playerState);
    player1.singlePlayer = true;
    player2 = {};
  } else {
    player2 = new Player2(playerState);
    player2.singlePlayer = true;
    player1 = {};
  }
  startTimer();
}  

export const newTwoPlayerGame = playerStates => {
  initialSetup();
  player1 = new Player1(playerStates[0]);
  player2 = new Player2(playerStates[1]);
}

const initialSetup = () => {
  const canvas = document.querySelector('#green-backdrop');
  canvas.style.display = "block";
  const ctx = canvas.getContext('2d');
  setupGreenBackdrop();
  addStaticWalls();
  addBreakableWalls();
  addPowerUp(ctx);
  addShield(ctx);
  addSpikes(ctx);
  music.raiseVolume();
  music.play();
}

export const loadSounds = () => {
  explosionSound = new Sound('public/gameSounds/explosion.mp3');
  shieldSound = new Sound('public/gameSounds/shield.mp3');
  powerUpSound = new Sound('public/gameSounds/powerUp.mp3');
  spikeSound = new Sound('public/gameSounds/spike.mp3');
  gameOverSound = new Sound('public/gameSounds/gameOver.mp3');
  music = new Sound('public/gameSounds/music.mp3');
}

export const addToggleSound = () => {
  const button = document.querySelector('#toggle-sound');
  button.addEventListener('click', () => {
    if (music.on) {
      music.stop()
      music.on = false;
    } else {
      music.play();
      music.on = true;
    }
  });
}

export const checkGameOver = (spread ) => {
  let p1Win = false, p2Win = false, pos;

  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];

    if (player1.xPos === pos[0] &&
      player1.yPos === pos[1]) {
        p2Win = checkShield(player1) ? false : true;
    }
    if (player2.xPos === pos[0] &&
      player2.yPos === pos[1]) {
        p1Win = checkShield(player2) ? false : true;
    }
  }

  evaluateWinner(p1Win, p2Win);
}

export const checkTimeTrialEnd = () => {
  if (player1.singlePlayer || player2.singlePlayer) {
    let score = getTimerScore();
    let innerText = `SCORE ${score}`;
    let color = 'white';
    gameOverMessage(innerText, color)
  }
}

export const evaluateWinner = (p1Win, p2Win) => {
  let innerText, color, gameOver;

  if ((p1Win || p2Win) && (player1.singlePlayer || player2.singlePlayer)) {
    stopTimer();
    innerText = `GAME OVER.`;
    color = 'white';
  } else if (p1Win && p2Win) {
    innerText = 'TIE!';
    color = 'white';
  } else if (p1Win) {
    innerText = 'FIRE WINS!';
    color = '#fc8200';
  } else if (p2Win) {
    innerText = 'ICE WINS!';
    color = '#8feafc';
  } 

  gameOver = p1Win || p2Win ? true : false;
  if (gameOver) {
    gameOverMessage(innerText, color);
  }
}

const gameOverMessage = (text, color) => {
  const billBoard = document.querySelector('.bill-board');
  const modal = document.querySelector('#modal');
  const playAgain = document.querySelector('#play-again');

  player1.possibleMoves = [];
  player2.possibleMoves = [];
  music.stop();
  gameOverSound.play();
  billBoard.innerText = text;
  billBoard.style.color = color;
  billBoard.style.visibility = 'visible';
  playAgain.style.visibility = 'visible';
  modal.style.display = 'block';
  window.addEventListener('keyup', e => {
    if (e.keyCode === 32) window.location.reload();
  });
}

const checkShield = player => {
  if (player.shield) {
    setTimeout(() => {
      player.shield = false;
      player.reRender.call(player)}, 325)
    return true;
  }
  return false;
}

export {
  explosionSound,
  shieldSound,
  powerUpSound, 
  music,
  player1,
  player2,
  spikeSound
};