import { getBreakableWalls, getStaticWalls } from '../util/wallUtil';
import { merge } from 'lodash';
import { renderExplosion } from './explosion';

export const getLiveBombs = () => liveBombs;

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
      setTimeout(() => renderExplosion(dX, dY, ctx), 1500);
    });
  }
} 

const bombable = (x, y) => {
  const bombBarriers = merge({}, getStaticWalls(), getBreakableWalls());
  if (bombBarriers[x] && bombBarriers[x].indexOf(y) === -1) {
    return true;
  }
  return false;
};

const offsetDirection = (direction, x, y) => {
  switch (direction) {
    case 'W':
      x -= 50;
      break;
    case 'N':
      y -= 50;
      break;
    case 'E':
      x += 50;
      break;
    case 'S':
      y += 50;
      break;
  }

  return [x, y];
}