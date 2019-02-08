import { breakableWalls, staticWalls } from '../util/wallUtil';
import { merge } from 'lodash';
import { renderExplosion } from './explosion';
import { offsetDirection } from '../util/moveUtil';

export { liveBombs }; 

const liveBombs = {};

export const dropBomb = (direction, x, y) => {
  const bombImg = new Image();
  bombImg.src = '../../public/gameImages/bombs/bomb.png';
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const [dX, dY] = offsetDirection(direction, x, y);

  if (bombable(dX, dY)) {
    liveBombs[dX] ? liveBombs[dX].push(dY) : liveBombs[dX] = [dY];
    bombImg.addEventListener('load', () => {
      ctx.drawImage(bombImg, dX, dY);
      setTimeout(() => renderExplosion(dX, dY, ctx), 1250);
    });
  }
} 

const bombable = (x, y) => {
  const bombBarriers = merge({}, staticWalls, breakableWalls);
  if (bombBarriers[x] && bombBarriers[x].indexOf(y) === -1) {
    return true;
  }
  return false;
};