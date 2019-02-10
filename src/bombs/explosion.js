import { staticWalls, removeWall } from '../util/wallUtil';
import { liveBombs } from './bomb';
import { powerUpPos, renderPowerUp } from '../powerUps/powerUp';
import { shieldPos, renderShield } from '../powerUps/shield';
import { checkGameOver } from '../util/gameUtil';
import { explosionSound } from '../main';

const liveAttack = {};

export const renderExplosion = (xPos, yPos, ctx, bombPower, id) => {
  const attackImg = new Image();
  if (id === 1) {
    attackImg.src = '../../public/gameImages/bombs/fire.png';
  } else {
    attackImg.src = '../../public/gameImages/bombs/ice.png';
  }
  attackImg.addEventListener('load', () => {
    explosionSound.play();
    liveBombs[xPos].splice(liveBombs[xPos].indexOf(yPos), 1);
    const spread = getSpread(xPos, yPos, bombPower);
    spreadAttack(ctx, attackImg, spread);
    checkGameOver(spread, 1);
    setTimeout(() => coolDown(ctx, spread), 2000);
  });
}

const getSpread = (x, y, bombPower) => {
  const attack = getAttack(x, y, bombPower);
  const spread = [];

  let xPos, yPos;
  for (let i = 0; i < attack.length; i++) {
    [xPos, yPos] = attack[i];
    if (checkAttack(xPos, yPos)) {
      removeWall(xPos, yPos);
      spread.push([xPos, yPos]);
    } else {
      // skip all attack going direction blocked by static wall
      if ((i + 1) % (attack.length / 4) !== 0) i++;
    }
  }
  spread.push([x, y]);
  return spread;
}

const spreadAttack = (ctx, attackImg, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    addToLiveAttack(pos);
    ctx.drawImage(attackImg, pos[0], pos[1]);    
  }
  checkGameOver(liveAttack);
}

const coolDown = (ctx, spread) => {
  let pos;
  for (let i = 0; i < spread.length; i++) {
    pos = spread[i];
    ctx.fillStyle = '#3B8314';
    ctx.fillRect(pos[0], pos[1], 50, 50);  
    if (powerUpPos[pos[0]] === pos[1]) renderPowerUp(pos[0], pos[1]);
    if (shieldPos[pos[0]] === pos[1]) renderShield(pos[0], pos[1]);
  }
};

const getAttack = (x, y, bombPower) => {
  let attack = [];

  // intentional so array is sorted based off of direction of attack
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x - (50 * i), y]); 
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x + (50 * i), y]);
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x, y - (50 * i)]);
  }
  for (let i = 1; i < bombPower + 1; i++) {
    attack.push([x, y + (50 * i)]);
  }

  return attack;
};

const checkAttack  = (x, y) => {
  return (staticWalls[x] && staticWalls[x].indexOf(y) === -1);
}

const addToLiveAttack = (pos) => {
  let [x, y] = pos;
  liveAttack[x] ? 
  liveAttack[x].push(y) :
  liveAttack[x] = [y];
};

const removeFromLiveAttack = spread => {
  let x, y;
  for (let i = 0; i < spread.length; i++) {
    [x, y] = [spread[i][0], spread[i][0]];
    liveAttack[x].splice(liveAttack[x].indexOf(y), 1);
  }
};

export { liveAttack };
