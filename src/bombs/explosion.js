import { getLiveBombs } from './bomb';
import { getStaticWalls, getBreakableWalls } from '../util/wallUtil';

export const getFire = () => fire;

const fire = {};

export const renderExplosion = (x, y, ctx) => {
  const bombs = getLiveBombs();
  const fireImg = new Image();
  fireImg.src = '../../public/gameImages/bombs/fire.png';
  
  fireImg.addEventListener('load', () => {
    bombs[x].splice(bombs[x].indexOf(y), 1);
    fire[x] ? fire[x].push(y) : fire[x] = [y];
    const spread = getFireSpread(x, y);
    spreadFire(ctx, fireImg, spread);
    setTimeout(() => coolDown(ctx, spread), 1000);
  });
}

const getFireSpread = (x, y) => {
  const breakableWalls = getBreakableWalls();
  const staticWalls = getStaticWalls();
  const crossPos = getCrossPos(x, y);
  const spread = [];

  let xPos, yPos;
  for (let i = 0; i < crossPos.length; i++) {
    [xPos, yPos] = crossPos[i];
    if (staticWalls[xPos] && staticWalls[xPos].indexOf(yPos) === -1) {
      if (breakableWalls[xPos] && 
        breakableWalls[xPos].indexOf(yPos) !== -1) {
          breakableWalls[xPos].splice(breakableWalls[xPos].indexOf(yPos), 1);
      }
      spread.push([xPos, yPos]);
    }
  }

  return spread;
}

const spreadFire = (ctx, fireImg, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    ctx.drawImage(fireImg, pos[0], pos[1]);    
  }
}

const coolDown = (ctx, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    ctx.fillStyle = '#3B8314';
    ctx.fillRect(pos[0], pos[1], 50, 50);   
  }
};

const getCrossPos = (x, y) => ([
  [x, y],
  [x - 50, y],
  [x + 50, y],
  [x, y - 50],
  [x, y + 50]
]);