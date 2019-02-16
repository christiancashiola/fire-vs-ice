import moveMap from "../characters/moveMap";
import { currentPlayer } from "./gameUtil";

export const addMobileControls = () => {
  // disableSwipe();
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
    directions[i].addEventListener('touchstart', () => {
      syntheticE = mapMobileControl(keyCodes[i]);
      moveMap(syntheticE, currentPlayer);
    });
  }

  bomb.addEventListener('touchstart', () => {
    syntheticE = mapMobileControl([81, 79]);
    moveMap(syntheticE, currentPlayer);
  });
};

const mapMobileControl = keyCodes => {
  return { keyCode: keyCodes[currentPlayer.id - 1] }
}

const getMobileDirections = () => {
  const left = document.querySelector('#left');
  const up = document.querySelector('#row-1');
  const right = document.querySelector('#right');
  const down = document.querySelector('#row-3');

  return [left, up, right, down];
}

const disableSwipe = () => {
  let xPos, yPos, touch, prevX, prevY;
  window.addEventListener( "touchmove", e => {
    if (e.isTrusted) {
      touch = e.touches[0];
    }
    prevX = xPos;
    prevY = yPos;
    xPos = touch.pageX;
    yPos = touch.pageY;
    if (!prevX && !prevY) {
      return false;
    } else {
      if (Math.abs(prevX - xPos) > Math.abs(prevY - yPos)) {
        e.preventDefault();
        return false;
      }
    }
  });
}