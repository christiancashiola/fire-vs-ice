import setupJumbotron from './modules/board/jumbotron';
import setupGreenBackdrop from './modules/board/greenBackdrop';
import addStaticWalls from './modules/walls/staticWalls';

document.addEventListener('DOMContentLoaded', () => {
  setupGreenBackdrop();
  setupJumbotron();
  addStaticWalls();
});