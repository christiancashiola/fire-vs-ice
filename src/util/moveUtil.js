import { allWallsXToY, allWallsYToX } from './wallUtil';
import {
  liveBombs,
  getBombXVals,
  getBombYVals
} from '../bombs/bomb';
import { p1Pos, p2Pos } from '../main';
import { 
  allEnemies, 
  getEnemyXVals,
  getEnemyYVals,
} from './enemyUtil';

export const getPlayer1Moves = (x, y) => {
  const possibleMoves = [65, 87, 68, 83];
  let dX = x - 50, dY = y;

  const checkCollision = (move) => {
    if (allWallsXToY[dX] && allWallsXToY[dX].indexOf(dY) !== -1 ||
      (p2Pos[0] === dX && p2Pos[1] === dY)) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(65);
  dX += 50;
  dY -= 50;
  checkCollision(87);
  dX += 50;
  dY += 50;
  checkCollision(68);
  dX -= 50;
  dY += 50;
  checkCollision(83);
  return possibleMoves;
}

export const getPlayer2Moves = (x, y) => {
  const possibleMoves = [74, 73, 76, 75];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (allWallsXToY[dX] && allWallsXToY[dX].indexOf(dY) !== -1 ||
      (p1Pos[0] === dX && p1Pos[1] === dY)) {
      possibleMoves.splice(possibleMoves.indexOf(move), 1);
    }
  }

  checkCollision(74);
  dX += 50;
  dY -= 50;
  checkCollision(73);
  dX += 50;
  dY += 50;
  checkCollision(76);
  dX -= 50;
  dY += 50;
  checkCollision(75);
  return possibleMoves;
}

export const updateP1Pos = (x, y)  => {
  p1Pos.length = 0;
  p1Pos.push(x, y);
};

export const updateP2Pos = (x, y)  => {
  p2Pos.length = 0;
  p2Pos.push(x, y);
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
  let [dX, _] = getEnemyOffsetDirection(direction, x, y);
  let closestWall;
  let walls = allWallsYToX[y];
  walls = walls.concat(getEnemyXVals(y));
  walls = walls.concat(getBombXVals(y));

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
  let [_, dY] = getEnemyOffsetDirection(direction, x, y);
  let closestWall;
  let walls = allWallsXToY[x];
  walls = walls.concat(getEnemyYVals(x));
  walls = walls.concat(getBombYVals(x));
  
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