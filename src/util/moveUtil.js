export const getPossibleMoves = (walls, x, y) => {
  const possibleMoves = [37, 38, 39, 40];
  let dX = x - 50, dY = y;
  
  debugger  
  const checkCollision = (move) => {
    if (walls[dX] && walls[dX].indexOf(dY) !== -1) {
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