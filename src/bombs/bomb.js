import { renderExplosion } from './explosion';
import { player1, player2 } from '../util/gameUtil';

const liveBombs = {};

export const dropBomb = id => {
  let player;
  player = id === 1 ? player1 : player2;
  const { xPos, yPos, ctx, bombImg, bombPower } = player;

  liveBombs[xPos] ? liveBombs[xPos].push(yPos) : liveBombs[xPos] = [yPos];
  ctx.drawImage(bombImg, xPos, yPos);
  setTimeout(() => renderExplosion(xPos, yPos, ctx, bombPower, id), 1500);
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