import { getBreakableWalls } from '../util/wallUtil';

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
      setTimeout(() => renderExplosion(dX, dY, ctx), 3000);
    });
  }
} 

const renderExplosion = (x, y, ctx) => {
  liveBombs[x].splice(liveBombs[x].indexOf(y), 1);
  ctx.fillStyle = '#3B8314';
  ctx.fillRect(x, y, 50, 50);
  alert('Boom');
}

const bombable = (x, y) => {
  const walls = getBreakableWalls();
  return (walls[x] && walls[x].indexOf(y) !== -1) ? false : true;
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