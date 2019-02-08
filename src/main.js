import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import MainCharacter from './characters/mainCharacter';
import xEnemy from './characters/xEnemy';
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

  
  // setTimeout(() => {
    // debugger
    const enemyPos = getEnemyPos('x', 5);
    // debugger
    let pos;
    for (let i = 0; i < enemyPos.length; i++) {
      // debugger
      pos = enemyPos[i];
      let e = new xEnemy(initialXEnemyState(canvas, pos[0], pos[1]));
    }

  // }, 1000)

});