import { allEnemies, enemyCount } from './enemyUtil';
import { setupNewLevel } from '../main';

export const gameOver = (character) => {
  const enemies = Object.values(allEnemies);
  const [x, y] = [character.xPos, character.yPos];

  let enemy;
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    if (
      x < enemy.xPos + 50 &&
      x + 50 > enemy.xPos &&
      y < enemy.yPos + 50 &&
      y + 50 > enemy.yPos
    ) {
      return true;
    }
  }

  return false;
}

export const checkLevelComplete = () => {
  if (!enemyCount()) {
    setupNewLevel();
  }
}