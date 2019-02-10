import setupGreenBackdrop from './board/greenBackdrop';
import setupJumbotron from './board/jumbotron';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import { addPowerUp } from './powerUps/powerUp';
import Player1 from './characters/player1';
import Player2 from './characters/player2';
import { player1State, player2State } from './util/characterUtil';
import { addShield } from './powerUps/shield';
import ExplosionSound from './sounds/explosionSound';
import ShieldSound from './sounds/shieldSound';
import PowerUpSound from './sounds/powerUpSound';
import IntroSound from './sounds/introSound';
import Music from './sounds/music';


let player1, player2, explosionSound, shieldSound, powerUpSound, introSound, music;

document.addEventListener('DOMContentLoaded', () => {
  loadSounds();
  const button = document.querySelector('button');
  initialSetup();
  setTimeout(() => introSound.play(), 1000);
  setTimeout(() => music.play(), 3500);
  button.addEventListener('click', () => {
    if (music.on) {
      music.stop()
      music.on = false;
    } else {
      music.play();
      music.on = true;
    }
  });
});

const initialSetup = () => {
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
}


const loadSounds = () => {
  explosionSound = new ExplosionSound('/public/gameSounds/explosion.mp3');
  shieldSound = new ShieldSound('/public/gameSounds/shield.mp3');
  powerUpSound = new PowerUpSound('/public/gameSounds/powerUp.mp3');
  introSound = new IntroSound('/public/gameSounds/intro.mp3');
  music = new Music('/public/gameSounds/music.mp3');
}

export {
  player1,
  player2,
  explosionSound,
  shieldSound,
  powerUpSound, 
  music
};