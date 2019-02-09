import setupGreenBackdrop from './board/greenBackdrop';
import setupJumbotron from './board/jumbotron';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import { addFireUp, clearFireUp } from './powerUps/fireUp';
import MainCharacter from './characters/mainCharacter';
import MainCharacter2 from './characters/mainCharacter2';
import { initialCharacterState, initialCharacterState2, resetCharacterPos } from './util/characterUtil';
import { generateEnemies, enemyCount } from './util/enemyUtil';
import { clearBreakableWalls, resetAllWalls } from './util/wallUtil';
import { gameOver } from './util/gameUtil';

let level = 0;
const p1Pos = [50, 50];
const p2Pos = [950, 450];
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  // c.ctx = ctx;
  // initialSetup(ctx);
  initialSetup();
  // setupNewLevel();
});

// const gameLoop = ctx => {
//   initialSetup(ctx);
//   setupNewLevel();

  // let level = 1;
  // while (true) {
  //   if (!enemyCount()) {
  //     setupNewLevel(character, ++level);
  //   }
  // }  
// }

const initialSetup = () => {
  // resetAllWalls();
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');

  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  // clearFireUp();
  addFireUp(ctx);
  new MainCharacter(initialCharacterState(ctx));
  new MainCharacter2(initialCharacterState2(ctx));
  // resetCharacterPos(c);
}

// export const setupNewLevel = () => {
//   // const canvas = document.querySelector('#green-backdrop');
//   // const ctx = canvas.getContext('2d');
//   // initialSetup(ctx);
//   // level++;
//   const types = ['x', 'y'];
//   let id = 3;
//   // setInterval(() => {

//   //   generateEnemies(
//   //     Math.floor(types[Math.random() * 2])
//   //   , 1, id++);
//   // }, 10000)
//   // generateEnemies('x' , 5, 1);
//   // generateEnemies('y', 5, 2);
// }

export { p1Pos };