import Sound from '../sounds/sound';
import setupGreenBackdrop from '../board/greenBackdrop';
import setupJumbotron from '../board/jumbotron';
import addStaticWalls from '../walls/staticWalls';
import addBreakableWalls from '../walls/breakableWalls';
import { addPowerUp } from '../powerUps/powerUp';
import { addShield } from '../powerUps/shield';
import { player1State, player2State } from './characterUtil';
import Player1 from '../characters/player1';
import Player2 from '../characters/player2';
import { addSpikes } from '../traps/spikes';

let explosionSound,
    shieldSound, 
    player1, 
    player2,
    powerUpSound,
    spikeSound, 
    introSound, 
    gameOverSound,
    music;

export const newGame = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');

  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  addPowerUp(ctx);
  addShield(ctx);
  addSpikes(ctx);

  player1 = new Player1(player1State(ctx));
  player2 = new Player2(player2State(ctx));
  setTimeout(() => music.play(), 3000);
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
  const button = document.querySelector('button');
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

export const checkGameOver = (spread, checkNumber) => {
  let p1Win = false, p2Win = false, pos;

  if (checkNumber <= 6) {
    setTimeout(() => checkGameOver(spread, ++checkNumber), 50)
  }
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

export const evaluateWinner = (p1Win, p2Win) => {
  const billBoard = document.querySelector('.bill-board');
  let innerText, color, gameOver;

  if (p1Win && p2Win) {
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
    music.stop();
    gameOverSound.play();
    billBoard.innerText = innerText;
    billBoard.style.color = color;
    billBoard.style.visibility = 'visible';
    setTimeout(() => {
      billBoard.style.visibility = 'hidden'; 
      window.location.reload();
    }, 3000);
  }
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