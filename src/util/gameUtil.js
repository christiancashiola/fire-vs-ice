import { player1, player2, music } from '../main';

export const checkGameOver = (spread, checkNumber) => {
  let p1Win = false, p2Win = false, pos;

  if (checkNumber <= 6) {
    setTimeout(() => checkGameOver(spread, ++checkNumber), 50)
  }
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];

    if (player1.xPos === pos[0] &&
      player1.yPos === pos[1]) {
        p2Win = checkShield(player1) ? false : true;
    }
    if (player2.xPos === pos[0] &&
      player2.yPos === pos[1]) {
        p1Win = checkShield(player2) ? false : true;
    }
  }

  if (p1Win && p2Win) {
    alert('TIE!');
    music.stop();
  } else if (p1Win) {
    alert('PLAYER 1 WINS!');
    music.stop();
  } else if (p2Win) {
    alert('PLAYER 2 WINS!');
    music.stop();
  } 
}

const checkShield = player => {
  if (player.shield) {
    setTimeout(() => {
      player.shield = false;
      player.reRender.call(player)}, 325)
    return true;
  }
  return false;
}