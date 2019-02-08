import Enemy from '../characters/enemy';
import { allWallsXToY } from './wallUtil';

const enemy = new Image();
enemy.src = '../../public/gameImages/characters/enemy1.png';
const allEnemies = {};

export const generateEnemies = (type, amount) => {
  const canvas = document.querySelector('#green-backdrop');
  const pos = getEnemyPos(type, amount);
  let id, x, y;
  for (let i = 0; i < pos.length; i++) {
    id = `${type}${i}`
    x = pos[i][0];
    y = pos[i][1];
    allEnemies[id] = { x, y };
    new Enemy(initialEnemyState(id, type, canvas, x, y));
  }
}

const initialEnemyState = (id, type, canvas, xPos, yPos) => {
  let directions;
  directions = type === 'x' ? ['W', 'E'] : ['N', 'S'];
  return {
    id,
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
      if (allWallsXToY[x] && allWallsXToY[x].indexOf(y) === -1 && notOnTopOfEnemy(x, y)) {
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
  const enemies = Object.values(allEnemies);
  let enemy;
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    if (enemy.x === x && enemy.y === y) return false;
  } 

  return true;
}

export const getEnemyXVals = (y) => {
  const enemies = Object.values(allEnemies);
  const enemyXVals = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].y === y) {
      enemyXVals.push(Math.round(enemies[i].x / 50) * 50);
    }
  }

  return enemyXVals;
}

export const getEnemyYVals = (x) => {
  const enemies = Object.values(allEnemies);
  const enemyYVals = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].x === x) {
      enemyYVals.push(Math.round(enemies[i].y / 50) * 50);
    }
  }

  return enemyYVals;
}

export { allEnemies };