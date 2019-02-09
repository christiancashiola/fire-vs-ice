import { allWallsXToY } from '../util/wallUtil';
import { renderExplosion } from './explosion';
import { allEnemies } from '../util/enemyUtil';

const liveBombs = {};

export const dropBomb = (direction, x, y) => {
  const bombImg = new Image();
  bombImg.src = '../../public/gameImages/bombs/bomb.png';
  const canvas = document.querySelector('#green-backdrop');
  const ctx = canvas.getContext('2d');
  const [dX, dY] = getBombOffsetDirection(direction, x, y);
  
  if (bombable(dX, dY)) {
    liveBombs[dX] ? liveBombs[dX].push(dY) : liveBombs[dX] = [dY];
    bombImg.addEventListener('load', () => {
      ctx.drawImage(bombImg, dX, dY);
      setTimeout(() => renderExplosion(dX, dY, ctx), 1250);
    });
  }
} 

const bombable = (x, y) => {
  const enemies = Object.values(allEnemies);
  const enemiesXToY = {};

  let xPos, yPos;
  for (let i = 0; i < enemies.length; i++) {
    xPos = enemies[i].xPos;
    yPos = enemies[i].yPos;

    enemiesXToY[xPos] ?
    enemiesXToY[xPos].push(yPos) :
    enemiesXToY[xPos] = [yPos];
  }
  
  if ((allWallsXToY[x] && allWallsXToY[x].indexOf(y) === -1) ||
    (enemiesXToY[x] && enemiesXToY[x].indexOf(y) === -1)) {
    return true;
  }
  return false;
};

const getBombOffsetDirection = (direction, x, y) => {
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