import { breakableWalls, removeWall } from '../util/wallUtil';

let fireUpPos = {};

export const addFireUp = () => {

  let i = 0;
  while(i < 4) {
    const walls = Object.keys(breakableWalls);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = breakableWalls[x][Math.floor(Math.random() * breakableWalls[x].length)];
    if (!fireUpPos[x]) {
      fireUpPos[x] = y;
      i++;
    }
  }
};

export const renderFireUp = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const fireUp = new Image();
  fireUp.src = '../../public/gameImages/powerUps/fireUp.png';

  fireUp.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    ctx.drawImage(fireUp, x, y);
  });
}

export const fireUp = (x, y) => {
  if (fireUpPos[x] === y) {
    clearFireUp(x, y);
    return true;
  }

  return false;
};

export const clearFireUp = (x, y) => {
  delete fireUpPos[x];
};

export { fireUpPos };