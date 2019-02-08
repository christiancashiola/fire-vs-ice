import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import MainCharacter from './characters/mainCharacter';
import xEnemy from './characters/xEnemy';
import yEnemy from './characters/yEnemy';
import {
  getEnemyPos,
  initialCharacterState,
  initialXEnemyState  
} from './util/characterUtil';

const p1Pos = [50, 50];
export { p1Pos };


document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1050) {
    alert('This game is best enjoyed on a full screen desktop computer.')
  }
  const canvas = document.querySelector('#green-backdrop');
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  new MainCharacter(initialCharacterState(canvas));
  // const xEnemyPos = getEnemyPos('x', 5);
  // const yEnemyPos = getEnemyPos('y', 5);
  // let pos;
  // for (let i = 0; i < xEnemyPos.length; i++) {
  //   pos = xEnemyPos[i];
  //   new xEnemy(initialXEnemyState(canvas, pos[0], pos[1]));
  // }
  // for (let i = 0; i < yEnemyPos.length; i++) {
  //   pos = yEnemyPos[i];
  //   new yEnemy(initialXEnemyState(canvas, pos[0], pos[1]));
  // }
});