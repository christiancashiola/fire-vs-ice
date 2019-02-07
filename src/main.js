import setupJumbotron from './board/jumbotron';
import setupGreenBackdrop from './board/greenBackdrop';
import addStaticWalls from './walls/staticWalls';
import addBreakableWalls from './walls/breakableWalls';
import mainCharacter from './characters/mainCharacter';
import { initialCharacterState } from './util/characterUtil';

export const p1Pos = () => mainCharacterPos;
const mainCharacterPos = [50, 50];

document.addEventListener('DOMContentLoaded', () => {
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
  addBreakableWalls();
  const p1 = new mainCharacter(initialCharacterState());
});