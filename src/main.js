import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
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
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  new MainCharacter(initialCharacterState(canvas));
  generateEnemies('x' , 3);
  generateEnemies('y', 3);
});

export { p1Pos };