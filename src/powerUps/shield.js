import { breakableWalls, removeWall } from '../util/wallUtil';
import { spikePos } from '../traps/spikes';

let shieldPos = {};

export const addShield = () => {

  let i = 0;
  while(i < 2) {
    const xWalls = Object.keys(breakableWalls);
    const x = xWalls[Math.floor(Math.random() * xWalls.length)];
    const yWalls = Object.keys(breakableWalls[x]);
    const y = yWalls[Math.floor(Math.random() * yWalls.length)];
    if (!shieldPos[x] && !(spikePos[x] && spikePos[x][y])) {
      shieldPos[x] = y;
      i++;
    }
  }
  console.log(shieldPos)
};

export const renderShield = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const shield = new Image();
  shield.src = 'public/gameImages/powerUps/shield.png';

  shield.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    ctx.drawImage(shield, x, y);
  });
}

export const shield = (x, y) => {
  if (shieldPos[x] == y) {
    clearShield(x, y);
    return true;
  }

  return false;
};

export const clearShield = (x, y) => {
  delete shieldPos[x];
};

export { shieldPos };