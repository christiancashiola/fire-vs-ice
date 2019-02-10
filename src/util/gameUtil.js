import { p1Pos, p2Pos } from '../main';

export const checkGameOver = spread => {
  let p1Win = false, p2Win = false, pos;

  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];

    if (p1Pos[0] === pos[0] &&
      p1Pos[1] === pos[1]) {
        p2Win = true;
    }
    if (p2Pos[0] === pos[0] &&
      p2Pos[1] === pos[1]) {
        p1Win = true;
    }
  }

  if (p1Win && p2Win) {
    alert('TIE!');
  } else if (p1Win) {
    alert('PLAYER 1 WINS!');
  } else if (p2Win) {
    alert('PLAYER 2 WINS!');
  }
}