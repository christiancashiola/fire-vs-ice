import { staticWalls, removeWall } from '../util/wallUtil';
import { liveBombs } from './bomb';
import { p1Pos } from '../main';
import { allEnemies } from '../util/enemyUtil';

const liveFire = {};

export const renderExplosion = (x, y, ctx) => {
  const fireImg = new Image();
  fireImg.src = '../../public/gameImages/bombs/fire.png';
  
  fireImg.addEventListener('load', () => {
    liveBombs[x].splice(liveBombs[x].indexOf(y), 1);
    const spread = getFireSpread(x, y);
    spreadFire(ctx, fireImg, spread);
    setTimeout(() => coolDown(ctx, spread), 300);
  });
}

const getFireSpread = (x, y) => {
  const crossPos = getCrossPos(x, y);
  const spread = [];

  let xPos, yPos;
  for (let i = 0; i < crossPos.length; i++) {
    [xPos, yPos] = crossPos[i];
    if (staticWalls[xPos] && staticWalls[xPos].indexOf(yPos) === -1) {
      removeWall(xPos, yPos);
      spread.push([xPos, yPos]);
    } else {
      if (i % 2 !== 0) i++;
    }
  }

  return spread;
}

const spreadFire = (ctx, fireImg, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    addToLiveFire(pos);
    ctx.drawImage(fireImg, pos[0], pos[1]);    
  }
  destroyCharacters();
}

// TODO: remove enemy from all enemies
const destroyCharacters = () => {
  let enemy;
  const enemies = Object.values(allEnemies);
  const xVals = Object.keys(liveFire)
  let yVals;
  outerLoop:
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    for (let j = 0; j < xVals.length; j++) {
      if (Math.abs(xVals[j] - enemy.xPos) <= 49) {
        yVals = liveFire[xVals[j]];
        break;
      }   
    }
    if (yVals) {
      for (let k = 0; k < yVals.length; k++) {
        if (Math.abs(yVals[k] - enemy.yPos <= 49)) {
          enemy.destroy();
          delete allEnemies[enemy.id]
          debugger
          break outerLoop;
        }
      }
    }
  }
}

const coolDown = (ctx, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    if (p1Pos[0] === pos[0] &&
      p1Pos[1] === pos[1]) {
        alert('GAME OVER.');
      }
      ctx.fillStyle = '#3B8314';
      ctx.fillRect(pos[0], pos[1], 50, 50);   
    }
    removeFromLiveFire(spread);
};

const getCrossPos = (x, y) => ([
  [x, y],
  [x - 50, y],
  [x - 100, y],
  [x + 50, y],
  [x + 100, y],
  [x, y - 50],
  [x, y - 100],
  [x, y + 50],
  [x, y + 100]
]);

const addToLiveFire = (pos) => {
  let [x, y] = pos;
  liveFire[x] ? 
  liveFire[x].push(y) :
  liveFire[x] = [y];
};

const removeFromLiveFire = spread => {
  let x, y;
  for (let i = 0; i < spread.length; i++) {
    [x, y] = [spread[i][0], spread[i][0]];
    liveFire[x].splice(liveFire[x].indexOf(y), 1);
  }
};

export { liveFire };
