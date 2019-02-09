export const handleKeydown = (e, player) => {
  const { left, right, back, front } = player;
  if (e.keyCode === 32 && player.id === 1) return player.dropBomb();
  if (e.keyCode === 81 && player.id === 2) return player.dropBomb();
  if (!player.possibleMoves.includes(e.keyCode)) return;

  switch(e.keyCode) {
    case 65:
      player.render(left, -50, 0);
      player.direction = 'W';
      break;
    case 87:
      player.render(back, 0, -50);
      player.direction = 'N';
      break;
    case 68:
      player.render(right, 50, 0);
      player.direction = 'E';
      break;
    case 83:
      player.render(front, 0, 50);
      player.direction = 'S';
      break;
    case 37:
      player.render(left, -50, 0);
      player.direction = 'W';
      break;
    case 38:
      player.render(back, 0, -50);
      player.direction = 'N';
      break;
    case 39:
      player.render(right, 50, 0);
      player.direction = 'E';
      break;
    case 40:
      player.render(front, 0, 50);
      player.direction = 'S';
      break;
  } 
  player.getPossibleMoves();
}