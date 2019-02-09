import setupGreenBackdrop from './board/greenBackdrop';
import setupJumbotron from './board/jumbotron';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import { addFireUp } from './powerUps/fireUp';
import MainCharacter from './characters/mainCharacter';
import { initialCharacterState } from './util/characterUtil';
import { generateEnemies } from './util/enemyUtil';

const p1Pos = [50, 50];

document.addEventListener('DOMContentLoaded', () => {
  // if (window.innerWidth < 1050) {
  //   alert('This game is best enjoyed on a full screen desktop computer.')
  // }
  
  // setup -- soon to be encapsulated
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  addFireUp(ctx);
  new MainCharacter(initialCharacterState(ctx));
  generateEnemies('x' , 1);
  generateEnemies('y', 1);
});

export { p1Pos };