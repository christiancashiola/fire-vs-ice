import { allWallsXToY } from './wallUtil';
import { p1Pos, p2Pos } from '../main';


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