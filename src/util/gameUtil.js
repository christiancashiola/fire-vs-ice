import ExplosionSound from '../sounds/explosionSound';
import ShieldSound from '../sounds/shieldSound';
import PowerUpSound from '../sounds/powerUpSound';
import IntroSound from '../sounds/introSound';
import Music from '../sounds/music';
import setupGreenBackdrop from '../board/greenBackdrop';
import setupJumbotron from '../board/jumbotron';
import addStaticWalls from '../walls/staticWalls';
import addBreakableWalls from '../walls/breakableWalls';
import { addPowerUp } from '../powerUps/powerUp';
import { addShield } from '../powerUps/shield';
import { player1State, player2State } from './characterUtil';
import Player1 from '../characters/player1';
import Player2 from '../characters/player2';

let explosionSound,
    shieldSound, 
    player1, 
    player2,
    powerUpSound, 
    introSound, 
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

  player1 = new Player1(player1State(ctx));
  player2 = new Player2(player2State(ctx));
  // introSound.play();
  // setTimeout(() => music.play(), 2500);
}

export const loadSounds = () => {
  explosionSound = new ExplosionSound('public/gameSounds/explosion.mp3');
  shieldSound = new ShieldSound('public/gameSounds/shield.mp3');
  powerUpSound = new PowerUpSound('public/gameSounds/powerUp.mp3');
  introSound = new IntroSound('public/gameSounds/intro.mp3');
  music = new Music('public/gameSounds/music.mp3');
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

const evaluateWinner = (p1Win, p2Win) => {
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
    billBoard.innerText = innerText;
    billBoard.style.color = color;
    billBoard.style.visibility = 'visible';
    music.stop();
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
  player2
};