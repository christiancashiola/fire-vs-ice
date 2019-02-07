import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import mainCharacter from './characters/mainCharacter';
import { initialCharacterState } from './util/characterUtil';

const p1Pos = [50, 50];
export { p1Pos };

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1050) {
    alert('This game is best enjoyed on a full screen desktop computer.')
  }
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  const p1 = new mainCharacter(initialCharacterState());
});