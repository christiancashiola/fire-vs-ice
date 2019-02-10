import setupGreenBackdrop from './board/greenBackdrop';
import setupJumbotron from './board/jumbotron';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import { addPowerUp } from './powerUps/powerUp';
import Player1 from './characters/player1';
import Player2 from './characters/player2';
import { player1State, player2State } from './util/characterUtil';
import { addShield } from './powerUps/shield';

let player1, player2;

document.addEventListener('DOMContentLoaded', () => {
  initialSetup();
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

export { player1, player2 };