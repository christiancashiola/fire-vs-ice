import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import mainCharacter from './characters/mainCharacter';
import { initialCharacterState } from './util/characterUtil';

document.addEventListener('DOMContentLoaded', () => {
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  new mainCharacter(initialCharacterState());
});