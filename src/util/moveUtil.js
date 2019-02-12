import { allWallsXToY } from './wallUtil';
import { player1, player2 } from '../util/gameUtil';


export const updatePossibleMoves = () => {
  getPlayer1Moves(player1.xPos, player1.yPos);
  getPlayer2Moves(player2.xPos, player2.yPos);
}

export const getPlayer1Moves = (x, y) => {
  debugger

  const possibleMoves = [65, 87, 68, 83];
  let dX = x - 50, dY = y;

  const checkCollision = (move) => {
    if (allWallsXToY[dX] && allWallsXToY[dX].indexOf(dY) !== -1 ||
      (player2.xPos === dX && player2.yPos === dY)) {
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
  player1.possibleMoves = possibleMoves;
}

export const getPlayer2Moves = (x, y) => {
  const possibleMoves = [74, 73, 76, 75];
  let dX = x - 50, dY = y;
  
  const checkCollision = (move) => {
    if (allWallsXToY[dX] && allWallsXToY[dX].indexOf(dY) !== -1 ||
      (player1.xPos === dX && player1.yPos === dY)) {
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
  player2.possibleMoves = possibleMoves;
}