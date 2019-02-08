import Enemy from '../characters/Enemy';
import { allWalls } from './wallUtil';

const enemy = new Image();
enemy.src = '../../public/gameImages/characters/enemy1.png';
const allEnemies = [];

export const generateEnemies = (type, amount) => {
  const canvas = document.querySelector('#green-backdrop');
  const pos = getEnemyPos(type, amount);
  for (let i = 0; i < pos.length; i++) {
    new Enemy(initialEnemyState(type, canvas, pos[i][0], pos[i][1]));
  }
}

const initialEnemyState = (type, canvas, xPos, yPos) => {
  let directions;
  directions = type === 'x' ? ['W', 'E'] : ['N', 'S'];
  return {
    xPos,
    yPos,
    directions,
    direction: directions[Math.floor(Math.random() * 2)],
    ctx: canvas.getContext('2d'),
    image: enemy,
  };
};

const getEnemyPos = (type, amount) => {
  const enemyPos = [];
  
  let x, y;
  while (enemyPos.length < amount) {
    x = generateXPos(type)

    while ('no valid y position') {
      y = generateYPos(type);
      if (allWalls[x] && allWalls[x].indexOf(y) === -1 && notOnTopOfEnemy(x, y)) {
        allEnemies.push({ x, y });
        enemyPos.push([x, y]);
        break;
      }
    }
  }
  console.log(enemyPos);
  return enemyPos;
}

const SPAWN_COLS = [50, 150, 250, 350, 450, 550, 650, 750, 850, 950];
const SPAWN_ROWS = SPAWN_COLS.slice(0, 5);

const generateXPos = type => {
  if (type === 'y') return SPAWN_COLS[Math.floor(Math.random() * 10)];
  return Math.round(Math.random() * 901 / 50) * 50 + 50;
}

const generateYPos = type => {
  if (type === 'x') return SPAWN_ROWS[Math.floor(Math.random() * 5)];
  return Math.round(Math.random() * 401 / 50) * 50 + 50;
}

const notOnTopOfEnemy = (x, y) => {
  let enemyPos;
  for (let i = 0; i < allEnemies.length; i++) {
    enemyPos = allEnemies[i];
    if (enemyPos[0] === x && enemyPos[1] === y) return false;
  } 

  return true;
}

export { allEnemies };