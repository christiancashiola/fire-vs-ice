import { p1Pos } from '../main';
import { allEnemies } from './enemyUtil';

let gameOver = false;

export const characterDeath = () => {
  const enemies = Object.values(allEnemies);
  const [x, y] = p1Pos;

  let enemy;
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    if (
      x < enemy.xPos + 50 &&
      x + 50 > enemy.xPos &&
      y < enemy.yPos + 50 &&
      y + 50 > enemy.yPos
    ) {
      console.log('GAME OVER.');
      gameOver = true;
    }
  }
}
