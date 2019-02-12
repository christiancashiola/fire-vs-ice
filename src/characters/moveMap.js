import { updatePossibleMoves } from "../util/moveUtil";

export default (e, player) => {
  const { left, right, back, front } = player;
  if (e.keyCode === 81 && player.id === 1) return player.dropBomb();
  if (e.keyCode === 79 && player.id === 2) return player.dropBomb();
  if (!player.possibleMoves.includes(e.keyCode)) return;
  switch(e.keyCode) {
    case 65:
      player.readyRender(left, -50, 0);
      player.direction = 'W';
      break;
    case 87:
      player.readyRender(back, 0, -50);
      player.direction = 'N';
      break;
    case 68:
      player.readyRender(right, 50, 0);
      player.direction = 'E';
      break;
    case 83:
      player.readyRender(front, 0, 50);
      player.direction = 'S';
      break;
    case 74:
      player.readyRender(left, -50, 0);
      player.direction = 'W';
      break;
    case 73:
      player.readyRender(back, 0, -50);
      player.direction = 'N';
      break;
    case 76:
      player.readyRender(right, 50, 0);
      player.direction = 'E';
      break;
    case 75:
      player.readyRender(front, 0, 50);
      player.direction = 'S';
      break;
  } 

  // updatePossibleMoves();
}