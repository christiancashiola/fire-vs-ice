import { allWalls } from './wallUtil';

const allEnemies = [];
const frontImg = new Image();
const backImg = new Image();
const leftImg = new Image();
const rightImg = new Image();
const enemy = new Image();
enemy.src = '../../public/gameImages/characters/enemy1.png';
frontImg.src = '../../public/gameImages/characters/bombermanFront.png';
backImg.src = '../../public/gameImages/characters/bombermanBack.png';
leftImg.src = '../../public/gameImages/characters/bombermanLeft.png';
rightImg.src = '../../public/gameImages/characters/bombermanRight.png';

export const initialCharacterState = (canvas) => ({
  xPos: 50,
  yPos: 50,
  front: frontImg,
  back: backImg,
  left: leftImg,
  right: rightImg,
  currentImg: frontImg,
  direction: 'S',
  bombable: true,
  ctx: canvas.getContext('2d'),
  possibleMoves: [39, 40]
});

export const initialXEnemyState = (canvas, xPos, yPos) => {
  let directions = ['W', 'E'];
  return {
    xPos,
    yPos,
    direction: directions[Math.floor(Math.random() * 2)],
    ctx: canvas.getContext('2d'),
    image: enemy,
  };
};

export const getEnemyPos = (type, amount) => {
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
  if (type === 'y') {
    return SPAWN_COLS[Math.floor(Math.random() * 10)]
  }
  return Math.round(Math.random() * 901 / 50) * 50 + 50;
}

const generateYPos = type => {
  if (type === 'x') {
    return SPAWN_ROWS[Math.floor(Math.random() * 10)]
  }
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