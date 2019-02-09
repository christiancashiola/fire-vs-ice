import { allWallsXToY } from '../util/wallUtil';
import { renderExplosion } from './explosion';
import { allEnemies } from '../util/enemyUtil';

const liveBombs = {};

export const dropBomb = ({ bombImg, bombPower, x, y, ctx }) => {
  liveBombs[x] ? liveBombs[x].push(y) : liveBombs[x] = [y];
  ctx.drawImage(bombImg, x, y);
  setTimeout(() => renderExplosion(x, y, ctx, bombPower), 1250);
}

export const containsBomb = (x, y) => {
  if (liveBombs[x] && liveBombs[x].indexOf(y) !== -1) {
    return true;
  }
  return false;
};

// const bombable = (x, y) => {
//   const enemies = Object.values(allEnemies);
//   const enemiesXToY = {};

//   let xPos, yPos;
//   for (let i = 0; i < enemies.length; i++) {
//     xPos = enemies[i].xPos;
//     yPos = enemies[i].yPos;

//     enemiesXToY[xPos] ?
//     enemiesXToY[xPos].push(yPos) :
//     enemiesXToY[xPos] = [yPos];
//   }
  
//   if ((allWallsXToY[x] && allWallsXToY[x].indexOf(y) === -1) ||
//     (enemiesXToY[x] && enemiesXToY[x].indexOf(y) === -1)) {
//     return true;
//   }
//   return false;
// };

// const getBombOffsetDirection = (direction, x, y) => {
//   switch (direction) {
//     case 'W':
//     x -= 50;
//     break;
//     case 'N':
//     y -= 50;
//     break;
//     case 'E':
//     x += 50;
//     break;
//     case 'S':
//     y += 50;
//     break;
//   }
  
//   return [x, y];
// }

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