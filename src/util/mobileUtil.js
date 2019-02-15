import moveMap from "../characters/moveMap";
import { currentPlayer } from "./gameUtil";

export const addMobileControls = () => {
  const bomb = document.querySelector('#bomb');
  let directions = getMobileDirections();
  let keyCodes = [
    [65, 74],
    [87, 73],
    [68, 76],
    [83, 75]
  ]
  
  let syntheticE;
  for (let i = 0; i < directions.length; i++) {
    directions[i].addEventListener('click', () => {
      syntheticE = mapMobileControl(keyCodes[i]);
      moveMap(syntheticE, currentPlayer);
    });
  }

  bomb.addEventListener('click', () => {
    syntheticE = mapMobileControl([81, 79]);
    moveMap(syntheticE, currentPlayer);
  });
};

const mapMobileControl = keyCodes => {
  return { keyCode: keyCodes[currentPlayer.id - 1] }
}

const getMobileDirections = () => {
  const left = document.querySelector('#left');
  const up = document.querySelector('#up');
  const right = document.querySelector('#right');
  const down = document.querySelector('#down');

  return [left, up, right, down];
}