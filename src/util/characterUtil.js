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
  const walls = allWalls;
  let xOffset = 50, yOffset = 50;
  type === 'x' ? yOffset = 100 : xOffset = 100;
  
  let x, y, pos;
  while (enemyPos.length < amount) {
    pos = [];
    // TODO: enemies cannot spawn on top of each other
    x = Math.round(Math.random() * 901 / xOffset) * xOffset + 50;
    pos.push(x);
    while (pos.length < 2) {
      y = Math.round(Math.random() * 401 / yOffset) * yOffset + 50;
      if (walls[x] && walls[x].indexOf(y) === -1 && notOnTopOfEnemy(x, y)) {
        pos.push(y);
        console.log(x, y);
        allEnemies.push({ x, y });
        enemyPos.push(pos);
      }
    }
  }
  
  return enemyPos;
}

const notOnTopOfEnemy = (x, y) => {
  let enemyPos;
  for (let i = 0; i < allEnemies.length; i++) {
    enemyPos = allEnemies[i];
    if (enemyPos[0] === x && enemyPos[1] === y) return false;
  } 

  return true;
}