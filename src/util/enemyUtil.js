import Enemy from '../characters/enemy';
import { allWallsXToY } from './wallUtil';

const enemy = new Image();
enemy.src = '../../public/gameImages/characters/blueEnemy.png';
const allEnemies = {};

export const generateEnemies = (type, amount, id) => {
  const canvas = document.querySelector('#green-backdrop');
  const pos = getEnemyPos(type, amount);
  let x, y;
  for (let i = 0; i < pos.length; i++) {
    // id = `${type}${i}`
    x = pos[i][0];
    y = pos[i][1];
    allEnemies[id] = new Enemy(initialEnemyState(id, type, canvas, x, y));
    console.log(allEnemies);
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
  return enemyPos;
}

const SPAWN_COLS = [150, 250, 350, 450, 550, 650, 750, 850, 950];
const SPAWN_ROWS = SPAWN_COLS.slice(0, 4);

const generateXPos = type => {
  if (type === 'y') return SPAWN_COLS[Math.floor(Math.random() * 10)];
  return Math.round(Math.random() * 801 / 50) * 50 + 150;
}

const generateYPos = type => {
  if (type === 'x') return SPAWN_ROWS[Math.floor(Math.random() * 4)];
  return Math.round(Math.random() * 301 / 50) * 50 + 150;
}

const notOnTopOfEnemy = (x, y) => {
  const enemies = Object.values(allEnemies);
  let enemy;
  for (let i = 0; i < enemies.length; i++) {
    enemy = enemies[i];
    if (enemy.xPos === x && enemy.yPos === y) return false;
  } 

  return true;
}

export const getEnemyXVals = (y) => {
  const enemies = getImposedEnemyPos();
  const enemyXVals = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].yPos === y) {
      enemyXVals.push(Math.round(enemies[i].xPos / 50) * 50);
    }
  }

  return enemyXVals;
}

export const getEnemyYVals = (x) => {
  const enemies = getImposedEnemyPos();
  const enemyYVals = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].xPos === x) {
      enemyYVals.push(Math.round(enemies[i].yPos / 50) * 50);
    }
  }

  return enemyYVals;
}

export const getImposedEnemyPos = () => {
  const enemies = Object.values(allEnemies);
  const imposedPos = [];
  let xPos, yPos;

  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    xPos = Math.round(enemy.xPos / 50) * 50;
    yPos = Math.round(enemy.yPos / 50) * 50;
    
    imposedPos.push({ xPos, yPos });
  }
  
  return imposedPos;
};

export const enemyCount = () => {
  return Object.values(allEnemies).length;
}

export { allEnemies };