import { renderExplosion } from './explosion';

const liveBombs = {};

export const dropBomb = ({ bombImg, bombPower, x, y, ctx, id }) => {
  liveBombs[x] ? liveBombs[x].push(y) : liveBombs[x] = [y];
  ctx.drawImage(bombImg, x, y);
  setTimeout(() => renderExplosion(x, y, ctx, bombPower, id), 1500);
}

export const containsBomb = (x, y) => {
  if (liveBombs[x] && liveBombs[x].indexOf(y) !== -1) {
    return true;
  }
  return false;
};

export const getBombYVals = (x) => {
  return liveBombs[x];
}

export const getBombXVals = (y) => {
  const xVals = Object.keys(liveBombs);
  const bombXVals = [];
  
  let xVal, yVals;
  for (let i = 0; i < xVals.length; i++) {
    xVal = xVals[i];
    yVals = liveBombs[xVal];
    
    for (let j = 0; j < yVals.length; j++) {
      if (yVals[i] === y) {
        bombXVals.push(xVal);
      }
    }
  }
  return bombXVals;
}

export { liveBombs }; 