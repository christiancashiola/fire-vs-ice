import { breakableWalls, removeWall } from '../util/wallUtil';

let spikePos = {};

export const addSpikes = () => {

  let i = 0;
  while(i < 4) {
    const walls = Object.keys(breakableWalls);
    const x = walls[Math.floor(Math.random() * walls.length)];
    const y = breakableWalls[x][Math.floor(Math.random() * breakableWalls[x].length)];
    if (!spikePos[x] && doesNotBlockPlayerSpawn(x, y)) {
      spikePos[x] = y;
      i++;
    }
  }
};

const doesNotBlockPlayerSpawn = (x, y) => {
  return (
    (x <= 200 && y <= 300) ||
    (x >= 500 && y >= 200) ?
    false : true
  );
};

export const renderSpikes = (x, y) => {
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const spikes = new Image();
  spikes.src = 'public/gameImages/traps/spikes.png';

  spikes.addEventListener('load', () => {
    ctx.fillRect(x, y, 50, 50);
    ctx.fillStyle = '#3B8314';
    removeWall(x, y);

    ctx.drawImage(spikes, x, y);
  });
}

export const spikes = (x, y) => {
  return spikePos[x] === y ? true : false;
};

export { spikePos };