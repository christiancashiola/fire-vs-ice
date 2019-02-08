import { allWalls } from './wallUtil';
import { allEnemies } from './enemyUtil';
import { liveBombs } from '../bombs/bomb';
import { p1Pos } from '../main';

export const getPossibleMoves = (x, y) => {
  const possibleMoves = [37, 38, 39, 40];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (allWalls[dX] && allWalls[dX].indexOf(dY) !== -1 ||
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

export const canMove = (direction, x, y) => {
  const [dX, dY] = offsetDirection(direction, x, y);
  if (allWalls[dX] && allWalls[dX].indexOf(dY) !== -1) {
    return false;
  } else {
    return true;
  }
}

const noEnemiesInTheWay = (x, y) => {
  return !allEnemies.some(enemy => enemy.x === x & enemy.y === y);
}

export const offsetDirection = (direction, x, y) => {
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