import { staticWalls, removeWall } from '../util/wallUtil';
import { powerUpPos, renderPowerUp } from '../powerUps/powerUp';
import { shieldPos, renderShield } from '../powerUps/shield';
import { checkGameOver, explosionSound } from '../util/gameUtil';
import { renderSpikes, spikePos } from '../traps/spikes';

const liveBombs = {};
const liveAttack = {};

export class Bomb {
  constructor(props) {
    Object.assign(this, props);
    const { ctx, bombImg, x, y, } = this;
    ctx.drawImage(bombImg, x, y);
    this.explode = this.explode.bind(this);
    this.bombIntervalId = setTimeout(() => this.explode(true), 1500);
    
    liveBombs[x] ? 
    liveBombs[x][y] = this :
    liveBombs[x] = { [y]: this };
  }

  explode(initialBomb) {
    delete liveBombs[this.x][this.y]
    const spread = this.getSpread();
    this.detonateProximalBombs(spread);
    explosionSound.play();
    this.spreadAttack(spread);
    checkGameOver(spread);
    let coolTime;
    coolTime = initialBomb ? 300 : 300;
    setTimeout(() => this.coolDown(spread), coolTime);
  }
  
  getSpread() {
    const attack = this.getAttack();
    const spread = [];
    let x, y;
    for (let i = 0; i < attack.length; i++) {
      [x, y] = attack[i];
      if (staticWalls[x] && !staticWalls[x][y]) {
        removeWall(x, y);
        spread.push([x, y]);
      } else {
        // skip all attack going direction blocked by static wall
        if ((i + 1) % (attack.length / 4) !== 0) i++;
      }
    }

    spread.push([this.x, this.y]);
    return spread;
  }
  
  spreadAttack(spread) {
    let pos;
    for (let i = 0; i < spread.length; i++) {
      pos = spread[i];
      this.addToLiveAttack(pos);
      this.ctx.drawImage(this.attackImg, pos[0], pos[1]);    
    }
  }
  
  coolDown(spread) {
    let pos;
    this.removeFromLiveAttack(spread);
    for (let i = 0; i < spread.length; i++) {
      pos = spread[i];
      this.ctx.fillStyle = '#3B8314';
      this.ctx.fillRect(pos[0], pos[1], 50, 50);
      if (powerUpPos[pos[0]] == pos[1]) renderPowerUp(pos[0], pos[1]);
      if (shieldPos[pos[0]] == pos[1]) renderShield(pos[0], pos[1]);
      if (spikePos[pos[0]] == pos[1]) renderSpikes(pos[0], pos[1]);
    }
  };
  
  getAttack() {
    const {x, y, bombPower} = this;
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
  
  addToLiveAttack(pos) {
    let [x, y] = pos;
    liveAttack[x] ? 
    liveAttack[x][y] = true :
    liveAttack[x] = { [y]: true };
  };
  
  removeFromLiveAttack(spread) {
    let x, y;
    for (let i = 0; i < spread.length; i++) {
      [x, y] = [spread[i][0], spread[i][1]];
      liveAttack[x][y] = false;
    }
  };

  detonateProximalBombs(spread) {
    let x, y, bomb;
    for (let i = 0; i < spread.length; i++) {
      [x, y] = spread[i];
      if (liveBombs[x] && liveBombs[x][y]) {
        bomb = liveBombs[x][y]
        clearInterval(bomb.bombIntervalId)
        bomb.explode(false);
      }
    }
  }
}

export { liveBombs, liveAttack }; 