import { loadSounds, addToggleSound, newGame } from './util/gameUtil';

document.addEventListener('DOMContentLoaded', () => {
  // let the games begin.
  loadSounds();
  addToggleSound();
  newGame();
});
