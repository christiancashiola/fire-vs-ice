import { breakableWalls, removeWall } from '../util/wallUtil';

let powerUpPos = {};

export const addPowerUp = () => {

  let i = 0;
  while(i < 4) {
    const xWalls = Object.keys(breakableWalls);
    const x = xWalls[Math.floor(Math.random() * xWalls.length)];
    const yWalls = Object.keys(breakableWalls[x]);
    const y = yWalls[Math.floor(Math.random() * yWalls.length)];
    if (!powerUpPos[x]) {
      powerUpPos[x] = y;
      i++;
    }
  }

};

export const renderPowerUp = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const powerUp = new Image();
  powerUp.src = 'public/gameImages/powerUps/powerUp.png';

  powerUp.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    ctx.drawImage(powerUp, x, y);
  });
}

export const powerUp = (x, y) => {
  if (powerUpPos[x] == y) {
    clearPowerUp(x, y);
    return true;
  }

  return false;
};

export const clearPowerUp = (x, y) => {
  delete powerUpPos[x];
};

export { powerUpPos };