import { allWallsXToY, allWallsYToX } from './wallUtil';
import { liveBombs } from '../bombs/bomb';
import { p1Pos } from '../main';
import { 
  allEnemies, 
  getEnemyXVals,
  getEnemyYVals,
  getImposedEnemyPos,
} from './enemyUtil';

export const getPossibleMoves = (x, y) => {
  const possibleMoves = [37, 38, 39, 40];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (allWallsXToY[dX] && allWallsXToY[dX].indexOf(dY) !== -1 ||
        liveBombs[dX] && liveBombs[dX].indexOf(dY) !== -1) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(37);
  dX += 50;
  dY -= 50;
  checkCollision(38);
  dX += 50;
  dY += 50;
  checkCollision(39);
  dX -= 50;
  dY += 50;
  checkCollision(40);
  return possibleMoves;
}

export const updateBoardPos = (x, y)  => {
  p1Pos.length = 0;
  p1Pos.push(x, y);
};

export const updateEnemyPos = (id, x, y) => {
  const enemies = Object.values(allEnemies);
  let enemy;
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    if (enemy.id === id) {
      enemy.xPos = x;
      enemy.yPos = y;
    }    
  }
}

export const canMoveX = (direction, x, y) => {
  let [dX, dY] = getEnemyOffsetDirection(direction, x, y);
  let closestWall;
  let walls = allWallsYToX[y];
  walls = walls.concat(getEnemyXVals(y));

  if (direction === 'W') {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i] < dX) {
        if (closestWall) {
          closestWall = walls[i] > closestWall ? walls[i] : closestWall;
        } else {
          closestWall = walls[i];
        }
      }      
    }
  } else {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i] > dX) {
        if (closestWall) {
          closestWall = walls[i] < closestWall ? walls[i] : closestWall;
        } else {
          closestWall = walls[i];
        }
      }      
    }
  }
  return Math.abs(dX - closestWall) < 25 ? false : true;
}

export const canMoveY = (direction, x, y) => {
  let [dX, dY] = getEnemyOffsetDirection(direction, x, y);
  let closestWall;
  let walls = allWallsXToY[x];
  walls = walls.concat(getEnemyYVals(x));
  
  if (direction === 'N') {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i] < dY) {
        if (closestWall) {
          closestWall = walls[i] > closestWall ? walls[i] : closestWall;
        } else {
          closestWall = walls[i];
        }
      }      
    }
  } else {
    for (let i = 0; i < walls.length; i++) {
      if (walls[i] > dY) {
        if (closestWall) {
          closestWall = walls[i] < closestWall ? walls[i] : closestWall;
        } else {
          closestWall = walls[i];
        }
      }      
    }
  }
  return Math.abs(dY - closestWall) < 25 ? false : true;
}

const getEnemyOffsetDirection = (direction, x, y) => {
  switch (direction) {
    case 'W':
      x -= 30;
      break;
    case 'N':
      y -= 30;
      break;
    case 'E':
      x += 30;
      break;
    case 'S':
      y += 30;
      break;
  }

  return [x, y];
}