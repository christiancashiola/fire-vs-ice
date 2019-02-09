import { staticWalls, removeWall } from '../util/wallUtil';
import { liveBombs } from './bomb';
import { p1Pos } from '../main';
import { allEnemies } from '../util/enemyUtil';
import { fireUpPos, renderFireUp } from '../powerUps/fireUp';

const liveFire = {};

export const renderExplosion = (x, y, ctx, bombPower) => {
  const fireImg = new Image();
  fireImg.src = '../../public/gameImages/bombs/fire.png';
  
  fireImg.addEventListener('load', () => {
    liveBombs[x].splice(liveBombs[x].indexOf(y), 1);
    const spread = getFireSpread(x, y, bombPower);
    spreadFire(ctx, fireImg, spread);
    setTimeout(() => coolDown(ctx, spread), 300);
  });
}

const getFireSpread = (x, y, bombPower) => {
  const fire = getFire(x, y, bombPower);
  const spread = [];

  let xPos, yPos;
  for (let i = 0; i < fire.length; i++) {
    [xPos, yPos] = fire[i];
    if (staticWalls[xPos] && staticWalls[xPos].indexOf(yPos) === -1) {
      removeWall(xPos, yPos);
      spread.push([xPos, yPos]);
    } else {
      // TODO: fix fire here
      if (i % (Math.floor(fire.length / 2) / 2) !== 0) i++;
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

const destroyCharacters = () => {
  let enemy;
  const enemies = Object.values(allEnemies);
  const xVals = Object.keys(liveFire)
  outerLoop:
  for (let i = 0; i < enemies.length; i++) {
    let yVals;
    enemy = enemies[i];
    for (let j = 0; j < xVals.length; j++) {
      if (Math.abs(xVals[j] - enemy.xPos) <= 49) {
        yVals = liveFire[xVals[j]];
        break;
      }   
    }
    if (yVals) {
      for (let k = 0; k < yVals.length; k++) {
        if (Math.abs(yVals[k] - enemy.yPos) <= 49) {
          enemy.destroy();
          delete allEnemies[enemy.id]
          break outerLoop;
        }
      }
    }
  }
}

const coolDown = (ctx, spread) => {
  let pos;
  destroyCharacters();
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    if (p1Pos[0] === pos[0] &&
      p1Pos[1] === pos[1]) {
      alert('GAME OVER.');
    }
    ctx.fillStyle = '#3B8314';
    ctx.fillRect(pos[0], pos[1], 50, 50);   
      if (fireUpPos[pos[0]] === pos[1]) {
        renderFireUp();
      }
    }
    removeFromLiveFire(spread);
};

const getFire = (x, y, bombPower) => {
  const firePower = bombPower * 4
  const fire = [[x, y]];

  let i = 1;
  while (fire.length < firePower + 1) {
    fire.push(
      [x - (50 * i), y],
      [x + (50 * i), y],
      [x, y - (50 * i)],
      [x, y + (50 * i)]
    )
    i++;
  }
  return fire;
};

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
