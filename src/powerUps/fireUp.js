import { getAllAvailablePos, breakableWalls, removeWall } from '../util/wallUtil';

let fireUpPos = {};

export const addFireUp = () => {

  let i = 0;
  while(i < 5) {
    const walls = Object.keys(breakableWalls);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = breakableWalls[x][Math.floor(Math.random() * breakableWalls[x].length)];
    fireUpPos[x] = y;
    i++;
  }
};

export const renderFireUp = () => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const fireUp = new Image();
  fireUp.src = '../../public/gameImages/powerUps/fireUp.png';

  const x = Object.keys(fireUpPos)[0];
  const y = fireUpPos[x];
  
  fireUp.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    fireUpPos[x] = y;
    ctx.drawImage(fireUp, x, y);
  });
}

export const fireUp = (x, y) => {
  if (fireUpPos[x] === y) {
    clearFireUp();
    return true;
  }

  return false;
};

export const clearFireUp = () => {
  fireUpPos = {};
};

export { fireUpPos };